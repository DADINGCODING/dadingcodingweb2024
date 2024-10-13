import React from 'react';
import { UserRole, canAccess } from '../types/roles';

interface AccessControlProps {
  role: UserRole;
  page: string;
  children: React.ReactNode;
}

export const AccessControl: React.FC<AccessControlProps> = ({ role, page, children }) => {
  const access = canAccess(role, page);
  
  if (access === 'none') {
    return <div>Access Denied</div>;
  }

  return <>{children}</>;
};