'use client';

import { useEffect } from 'react';

export default function GelinPage() {
  useEffect(() => {
    // Header ve footer'ı gizle
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (main) main.style.paddingTop = '0';
    
    // Cleanup function
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (main) main.style.paddingTop = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      <iframe
        src="https://cakagelin.netlify.app/"
        className="w-full h-full border-0"
        title="CAKA Gelin Saçı"
        allowFullScreen
      />
    </div>
  );
}
