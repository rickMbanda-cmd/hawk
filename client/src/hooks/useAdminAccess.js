
import { useState, useEffect } from 'react';

const useAdminAccess = () => {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [keysPressed, setKeysPressed] = useState({
    shift: false,
    alt: false,
    ctrl: false
  });

  useEffect(() => {
    // Check for secret URL on component mount
    const checkSecretURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessParam = urlParams.get('access');
      if (accessParam === 'admin') {
        setIsAdminModalOpen(true);
        // Clean the URL without refreshing the page
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    checkSecretURL();

    const handleKeyDown = (e) => {
      setKeysPressed(prev => ({
        ...prev,
        shift: e.shiftKey,
        alt: e.altKey,
        ctrl: e.ctrlKey
      }));

      // Check if all three keys are pressed
      if (e.shiftKey && e.altKey && e.ctrlKey) {
        e.preventDefault();
        setIsAdminModalOpen(true);
      }
    };

    const handleKeyUp = (e) => {
      setKeysPressed(prev => ({
        ...prev,
        shift: e.shiftKey,
        alt: e.altKey,
        ctrl: e.ctrlKey
      }));
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const closeAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const openAdminModal = () => {
    setIsAdminModalOpen(true);
  };

  return {
    isAdminModalOpen,
    closeAdminModal,
    openAdminModal,
    keysPressed
  };
};

export default useAdminAccess;