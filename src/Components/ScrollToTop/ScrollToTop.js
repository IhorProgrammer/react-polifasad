import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Переміщення вверх сторінки
  }, [pathname]);

  return null; // ScrollToTop нічого не відображає
}

export default ScrollToTop;
