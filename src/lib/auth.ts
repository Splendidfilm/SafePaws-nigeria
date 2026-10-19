// Authentication helper utilities
export interface UserSession {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
}

export const defaultMockUser: UserSession = {
  id: 'usr_default',
  name: 'Abina Phil-Oleniyi',
  email: 'abinaphilolaniyi@gmail.com',
  phone: '+234 801 234 5678',
  role: 'pet_owner',
};
