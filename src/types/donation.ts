export interface DonationPage {
  id: string;
  programId: string;
  title: string;
  description?: string;
  heroImageUrl?: string;
  customStyles: Record<string, any>;
  isActive: boolean;
  settings: Record<string, any>;
}

export interface DonationTier {
  id: string;
  programId: string;
  name: string;
  amount: number;
  description?: string;
  benefits: string[];
  isFeatured: boolean;
  displayOrder: number;
}

export interface ProgramOnboarding {
  id: string;
  programId: string;
  currentStep: string;
  completedSteps: string[];
  settings: Record<string, any>;
  isComplete: boolean;
}