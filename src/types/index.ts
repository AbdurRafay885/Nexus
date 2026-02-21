export type UserRole = 'entrepreneur' | 'investor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl: string;
  bio: string;
  isOnline?: boolean;
  createdAt: string;
}

export interface Entrepreneur extends User {
  role: 'entrepreneur';
  startupName: string;
  pitchSummary: string;
  fundingNeeded: string;
  industry: string;
  location: string;
  foundedYear: number;
  teamSize: number;
}

export interface Investor extends User {
  role: 'investor';
  investmentInterests: string[];
  investmentStage: string[];
  portfolioCompanies: string[];
  totalInvestments: number;
  minimumInvestment: string;
  maximumInvestment: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface ChatConversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  updatedAt: string;
}

export interface CollaborationRequest {
  id: string;
  investorId: string;
  entrepreneurId: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  lastModified: string;
  shared: boolean;
  url: string;
  ownerId: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  updateProfile: (userId: string, updates: Partial<User>) => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Meeting {
  id: string;
  title: string;
  start: string;
  end: string;
  status: 'confirmed' | 'pending' | 'declined';
  attendee: string;
}

export interface AvailabilitySlot {
  id: string;
  start: string;
  end: string;
}

export interface CallSession {
  id: string;
  participants: string[];
  startTime: string;
  endTime?: string;
  status: 'connecting' | 'active' | 'ended';
  isScreenSharing: boolean;
}

export type DocumentStatus = 'Draft' | 'In Review' | 'Signed';

export interface DealDocument extends Document {
  status: DocumentStatus;
  version: number;
  signedAt?: string;
  signatureUrl?: string; // For the e-signature mockup
  requiresActionFrom: UserRole;
}

export type TransactionType = 'Investment' | 'Deposit' | 'Withdrawal' | 'Transfer';
export type TransactionStatus = 'Completed' | 'Pending' | 'Failed';

export interface Transaction {
  id: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  receiverName: string;
  amount: number;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  timestamp: string;
  reference?: string;
}

export interface Wallet {
  userId: string;
  balance: number;
  currency: string;
  lastUpdated: string;
}

export interface AuthSecurity {
  is2FAEnabled: boolean;
  lastLogin: string;
  passwordStrength: 'Weak' | 'Medium' | 'Strong';
}