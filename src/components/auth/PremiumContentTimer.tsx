import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { PremiumAccessModal } from './PremiumAccessModal';

declare global {
  interface Window {
    showSubscribeModal: () => void;
  }
}

export function PremiumContentTimer() {
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };
    checkAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    // Define global function for showing modal
    window.showSubscribeModal = () => {
      if (!isAuthenticated) {
        setShowModal(true);
      }
    };

    // Reset modal state on route change
    setShowModal(false);

    // Show modal after 20 seconds if not authenticated and on blog pages
    if (!isAuthenticated && (location.pathname === '/blog' || location.pathname.startsWith('/blog/'))) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 20000);
      return () => clearTimeout(timer);
    }

    return () => {
      subscription.unsubscribe();
    };
  }, [isAuthenticated, location.pathname]);

  // Don't render anything if user is authenticated
  if (isAuthenticated) return null;

  return showModal ? <PremiumAccessModal onClose={() => setShowModal(false)} /> : null;
}