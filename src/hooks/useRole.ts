import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { UserRole } from '../types/user';

interface UseRoleReturn {
  role: UserRole;
  isAdmin: boolean;
  hasRole: (role: UserRole) => boolean;
}

export const useRole = (): UseRoleReturn => {
  const { user } = useAuth();
  const [role, setRole] = useState<UserRole>('student');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      setRole(user.role as UserRole);
      setIsAdmin(user.role === 'admin');
    }
  }, [user]);

  const hasRole = (checkRole: UserRole): boolean => {
    return role === checkRole;
  };

  return { role, isAdmin, hasRole };
};