import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Palette, Image, DollarSign, Settings, CheckCircle } from 'lucide-react';
import { getSchoolProgram } from '../lib/program';
import { getProgramOnboarding, updateProgramOnboarding } from '../lib/donation';
import { BrandingForm } from '../components/onboarding/BrandingForm';
import { DonationPageForm } from '../components/onboarding/DonationPageForm';
import { DonationTiersForm } from '../components/onboarding/DonationTiersForm';
import { ProgramSettingsForm } from '../components/onboarding/ProgramSettingsForm';
import type { SchoolProgram, ProgramOnboarding } from '../types';

const steps = [
  {
    id: 'branding',
    title: 'Program Branding',
    icon: Palette,
    description: 'Set up your program colors and logo',
    component: BrandingForm
  },
  {
    id: 'donation-page',
    title: 'Donation Page',
    icon: Image,
    description: 'Customize your donation page appearance',
    component: DonationPageForm
  },
  {
    id: 'tiers',
    title: 'Donation Tiers',
    icon: DollarSign,
    description: 'Configure donation tiers and benefits',
    component: DonationTiersForm
  },
  {
    id: 'settings',
    title: 'Program Settings',
    icon: Settings,
    description: 'Review and finalize program settings',
    component: ProgramSettingsForm
  }
];

export function ProgramOnboarding() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState<SchoolProgram | null>(null);
  const [onboarding, setOnboarding] = useState<ProgramOnboarding | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgramData() {
      if (!programId) return;
      
      try {
        const [programData, onboardingData] = await Promise.all([
          getSchoolProgram(programId),
          getProgramOnboarding(programId)
        ]);

        setProgram(programData);
        setOnboarding(onboardingData);
        
        // Set current step based on onboarding progress
        if (onboardingData?.completedSteps) {
          const lastCompletedIndex = steps.findIndex(
            step => !onboardingData.completedSteps.includes(step.id)
          );
          setCurrentStep(lastCompletedIndex === -1 ? steps.length - 1 : lastCompletedIndex);
        }
      } catch (error) {
        console.error('Error loading program data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProgramData();
  }, [programId]);

  const handleStepSubmit = async (data: any) => {
    if (!onboarding || !program) return;

    try {
      // Update program data based on step
      switch (steps[currentStep].id) {
        case 'branding':
          await updateProgramBranding(program.id, data);
          break;
        case 'donation-page':
          await updateDonationPage(program.id, data);
          break;
        case 'tiers':
          await updateDonationTiers(program.id, data);
          break;
        case 'settings':
          await updateProgramSettings(program.id, data);
          break;
      }

      // Mark step as completed
      const updatedSteps = [...onboarding.completedSteps, steps[currentStep].id];
      
      await updateProgramOnboarding(onboarding.id, {
        completedSteps: updatedSteps,
        currentStep: steps[currentStep + 1]?.id || steps[currentStep].id,
        isComplete: currentStep === steps.length - 1
      });

      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Onboarding complete - redirect to instructor portal
        navigate(`/instructor/${program.id}`);
      }
    } catch (error) {
      console.error('Error updating program:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!program || !onboarding) {
    return <div>Program not found</div>;
  }

  const currentStepData = steps[currentStep];
  const StepComponent = currentStepData.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Program Setup</h1>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="mt-8 flex items-center space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isComplete = onboarding.completedSteps.includes(step.id);
              const isCurrent = currentStep === index;
              
              return (
                <div key={step.id} className="flex-1">
                  <div className="relative">
                    {/* Progress Line */}
                    {index < steps.length - 1 && (
                      <div className={`absolute top-1/2 left-1/2 w-full h-0.5 -translate-y-1/2 ${
                        index < currentStep ? 'bg-[#5de0e6]' : 'bg-gray-200'
                      }`} />
                    )}
                    
                    {/* Step Icon */}
                    <div className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
                      isComplete || isCurrent
                        ? 'bg-[#5de0e6] text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {isComplete ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="text-sm font-medium text-gray-900">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-[#5de0e6]/10 rounded-xl">
              <currentStepData.icon className="w-8 h-8 text-[#5de0e6]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
              <p className="text-gray-600">{currentStepData.description}</p>
            </div>
          </div>

          {/* Step Form */}
          <StepComponent
            initialData={program.settings[currentStepData.id]}
            onSubmit={handleStepSubmit}
          />

          {/* Navigation */}
          <div className="mt-8 flex justify-end space-x-4">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                Back
              </button>
            )}
            <button
              onClick={() => handleStepSubmit(program.settings[currentStepData.id])}
              className="bg-[#5de0e6] text-white px-6 py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors"
            >
              {currentStep === steps.length - 1 ? 'Complete Setup' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}