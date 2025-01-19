export interface SchoolProgram {
  id: string;
  name: string;
  description?: string;
  accessCode: string;
  logoUrl?: string;
  primaryColor: string;
  secondaryColor: string;
  isActive: boolean;
  settings: Record<string, any>;
}

export interface Instructor {
  id: string;
  programId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  settings: Record<string, any>;
}

export interface ProgramMetrics {
  id: string;
  programId: string;
  metricType: string;
  value: number;
  recordedAt: string;
}

export interface ProgramDonation {
  id: string;
  programId: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  tier: string;
  message?: string;
  isAnonymous: boolean;
}