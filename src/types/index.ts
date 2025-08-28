export interface User {
  id: string;
  name: string;
  age: number;
  streakDays: number;
  completedGoals: number;
  buddyName?: string;
}

export interface MoodEntry {
  id?: string;
  date: string;
  mood: number;
  note: string;
  userId?: string;
}

export interface CopingStrategy {
  id?: string;
  trigger: string;
  alternative: string;
  icon: string;
  category?: string;
}

export interface PeerGroup {
  id: string;
  name: string;
  members: number;
  topic: string;
  nextMeeting: string;
  isActive: boolean;
}

export interface EmergencyContact {
  id: string;
  name: string;
  contact: string;
  available: string;
  type: 'crisis' | 'peer' | 'professional';
}