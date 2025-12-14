import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_POSITION_KEY = 'portfolio_scroll_position';

export function saveScrollPosition() {
  sessionStorage.setItem(SCROLL_POSITION_KEY, window.scrollY.toString());
}

export function getScrollPosition(): number {
  const saved = sessionStorage.getItem(SCROLL_POSITION_KEY);
  return saved ? parseInt(saved, 10) : 0;
}

export function clearScrollPosition() {
  sessionStorage.removeItem(SCROLL_POSITION_KEY);
}

export function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Check if we're returning to the portfolio from an architecture page
    const shouldRestore = sessionStorage.getItem('restore_scroll') === 'true';
    
    if (shouldRestore && location.pathname === '/') {
      const savedPosition = getScrollPosition();
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedPosition, behavior: 'instant' });
      });
      
      sessionStorage.removeItem('restore_scroll');
      clearScrollPosition();
    }
  }, [location.pathname]);
}

export function usePreserveScroll() {
  return {
    savePosition: () => {
      saveScrollPosition();
      sessionStorage.setItem('restore_scroll', 'true');
    }
  };
}
