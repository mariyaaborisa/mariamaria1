'use client';

import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsScrambling(false);
      return;
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    const targetLength = text.length;
    let iteration = 0;
    let timeoutId: NodeJS.Timeout;

    const scramble = () => {
      timeoutId = setTimeout(() => {
        setDisplayText((prev) => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });

        iteration += 1 / 3;

        if (iteration < targetLength) {
          scramble();
        } else {
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, 30);
    };

    const delayTimeout = setTimeout(() => {
      scramble();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(delayTimeout);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
}
