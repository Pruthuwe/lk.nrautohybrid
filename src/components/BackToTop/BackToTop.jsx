import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 300;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // initial check
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <a href="#" className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      <i className="fas fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;
