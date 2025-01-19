export interface ProgramAccess {
  id: string;
  programId: string;
  accessCode: string;
  isActive: boolean;
  expiresAt?: string;
  settings: Record<string, any>;
}

export interface ProgramAccessLog {
  id: string;
  programId: string;
  accessCode: string;
  ipAddress?: string;
  userAgent?: string;
  success: boolean;
  createdAt: string;
}

export interface ProgramDonationPage {
  id: string;
  programId: string;
  accessCode: string;
  title: string;
  description?: string;
  heroImageUrl?: string;
  customStyles: Record<string, any>;
  isActive: boolean;
  settings: Record<string, any>;
}