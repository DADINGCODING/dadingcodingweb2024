import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRole } from '../../hooks/useRole';
import AdminView from '../roles/AdminView';
import TutorView from '../roles/TutorView';
import PreTutorView from '../roles/PreTutorView';
import StudentView from '../roles/StudentView';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { role } = useRole();

  if (!user) {
    return <div>Please log in to view this page.</div>;
  }

  switch (role) {
    case 'admin':
      return <AdminView />;
    case 'tutor':
      return <TutorView />;
    case 'preTutor':
      return <PreTutorView />;
    case 'student':
      return <StudentView />;
    default:
      return <div>Invalid role</div>;
  }
};

export default Dashboard;