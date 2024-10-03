export type UserRole = 'admin' | 'tutor' | 'pretutor' | 'student' | 'guest';

export const canAccess = (role: UserRole, page: string): 'edit' | 'view' | 'none' => {
  const accessMap: Record<string, Record<UserRole, 'edit' | 'view' | 'none'>> = {
    notice: {
      admin: 'edit',
      tutor: 'view',
      pretutor: 'view',
      student: 'view',
      guest: 'view'
    },
    tutor: {
      admin: 'edit',
      tutor: 'edit',
      pretutor: 'view',
      student: 'view',
      guest: 'view'
    },
    // Add other pages as needed
  };

  return accessMap[page]?.[role] || 'none';
};
