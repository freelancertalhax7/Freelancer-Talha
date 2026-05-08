import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TerminalTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TerminalText({ text, delay = 0, className, onComplete }: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (delay > 0) {
      timeout = setTimeout(() => startTyping(), delay);
    } else {
      startTyping();
    }

    function startTyping() {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          onComplete?.();
        }
      }, 50);
      return () => clearInterval(interval);
    }

    return () => clearTimeout(timeout);
  }, [text, delay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <AnimatePresence>
        {!isComplete && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-[1.2em] ml-1 bg-cyber-green translate-y-1"
          />
        )}
      </AnimatePresence>
    </span>
  );
}
