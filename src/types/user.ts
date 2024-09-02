export type UserRole = 'admin' | 'tutor' | 'preTutor' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}