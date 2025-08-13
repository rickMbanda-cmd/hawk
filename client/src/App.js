import React from 'react';
import AppRoutes from './routes/AppRoutes';
import AdminLoginModal from './components/AdminLoginModal';
import useAdminAccess from './hooks/useAdminAccess';
import './App.css';

function App() {
  const { isAdminModalOpen, closeAdminModal } = useAdminAccess();

  return (
    <div className="App">
      <AppRoutes />
      <AdminLoginModal 
        isOpen={isAdminModalOpen} 
        onClose={closeAdminModal} 
      />
    </div>
  );
}

export default App;