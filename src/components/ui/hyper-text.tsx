import React, { useEffect, useState } from 'react';

interface HyperTextProps {
  text: string;
  className?: string;
  duration?: number; // total duration in ms
  animateOnLoad?: boolean;
}

const HyperText: React.FC<HyperTextProps> = ({ text, className = '', duration = 1200, animateOnLoad = true }) => {
  const [displayed, setDisplayed] = useState(animateOnLoad ? '' : text);

  useEffect(() => {
    if (!animateOnLoad) {
      setDisplayed(text);
      return;
    }
    setDisplayed('');
    let current = '';
    let i = 0;
    const interval = setInterval(() => {
      current += text[i];
      setDisplayed(current);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, Math.max(20, duration / Math.max(1, text.length)));
    return () => clearInterval(interval);
  }, [text, duration, animateOnLoad]);

  return <span className={className}>{displayed}</span>;
};

export default HyperText; 