import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, Users, Rocket } from 'lucide-react';

const initialSteps = [
  {
    icon: PlayCircle,
    title: "Watch Setup Video",
    description: "Learn how to get started",
    completed: false
  },
  {
    icon: Users,
    title: "Invite your team",
    description: "Start collaborating with your team",
    completed: false
  },
  {
    icon: Rocket,
    title: "Welcome to Fundrobe!",
    description: "Get up and running in 3 minutes",
    completed: false
  }
];

// Step content components
const SetupVideoContent = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Fundrobe!</h1>
      <p className="text-gray-600">Watch this quick setup video to get started.</p>
    </div>

    <div className="mb-8 rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Welcome to Fundrobe"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <h3 className="font-medium text-gray-900">Quick Links</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 border border-gray-200 rounded-lg hover:border-[#5de0e6] transition-colors text-left">
          <h4 className="font-medium text-gray-900 mb-1">Documentation</h4>
          <p className="text-sm text-gray-500">Learn how to use Fundrobe</p>
        </button>
        <button className="p-4 border border-gray-200 rounded-lg hover:border-[#5de0e6] transition-colors text-left">
          <h4 className="font-medium text-gray-900 mb-1">Support</h4>
          <p className="text-sm text-gray-500">Get help when you need it</p>
        </button>
      </div>
    </div>
  </div>
);

const InviteTeamContent = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Invite Your Team</h1>
      <p className="text-gray-600">Add team members to collaborate on your fundraising campaigns.</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6">
      <form className="space-y-4">
        <div>
          <label htmlFor="emails" className="block text-sm font-medium text-gray-700 mb-1">
            Email Addresses
          </label>
          <textarea
            id="emails"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
            rows={4}
            placeholder="Enter email addresses (one per line)"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#5de0e6] text-white py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors"
        >
          Send Invites
        </button>
      </form>
    </div>
  </div>
);

const WelcomeContent = () => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">You're All Set!</h1>
      <p className="text-gray-600">Your Fundrobe account is ready to go.</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="text-center">
        <div className="inline-block p-4 bg-[#5de0e6]/10 rounded-full mb-4">
          <Rocket className="w-8 h-8 text-[#5de0e6]" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Launch</h3>
        <p className="text-gray-600">Start creating your first fundraising campaign!</p>
      </div>

      <button
        className="w-full bg-[#5de0e6] text-white py-3 rounded-lg hover:bg-[#4bc5cb] transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  </div>
);

export function Welcome() {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(initialSteps);
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index: number) => {
    setSteps(prevSteps => 
      prevSteps.map((step, i) => ({
        ...step,
        completed: i < index
      }))
    );
    setActiveStep(index);
  };

  // Render content based on active step
  const renderStepContent = () => {
    switch(activeStep) {
      case 0:
        return <SetupVideoContent />;
      case 1:
        return <InviteTeamContent />;
      case 2:
        return <WelcomeContent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-gray-50 border-r border-gray-200 p-8">
        <div className="mb-12">
          <img 
            src="https://i.im.ge/2025/01/06/zp6jNc.Animated-Fundrobe-Logo-2.png"
            alt="Fundrobe Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <button 
              key={index}
              onClick={() => handleStepClick(index)}
              className={`w-full flex items-start space-x-3 text-left transition-all duration-300 ${
                activeStep === index ? 'opacity-100' : 'opacity-60'
              } hover:opacity-100`}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                step.completed ? 'bg-[#5de0e6]/10 text-[#5de0e6]' : 
                activeStep === index ? 'bg-[#5de0e6]/10 text-[#5de0e6]' : 
                'bg-gray-100 text-gray-400'
              }`}>
                <step.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="absolute bottom-8 left-8 flex items-center text-gray-600 hover:text-gray-900">
          <ArrowRight className="w-4 h-4 mr-2" />
          <button onClick={() => navigate('/0001')}>Back to home</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          {renderStepContent()}

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeStep ? 'bg-[#5de0e6]' : 
                  step.completed ? 'bg-[#5de0e6]/50' : 
                  'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}