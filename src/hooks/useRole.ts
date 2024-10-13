import { useState, useEffect } from 'react';
import { useAuth } from './useAuth'; // 인증 훅이 필요하다면 import
import { UserRole } from '../types/user';

interface UseRoleReturn {
  role: UserRole;
  isAdmin: boolean;
  hasRole: (role: UserRole) => boolean;
}

export const useRole = (): UseRoleReturn => {
  const [role, setRole] = useState<UserRole>('student');
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth(); // 만약 인증된 사용자의 정보를 가져오고 싶다면

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
