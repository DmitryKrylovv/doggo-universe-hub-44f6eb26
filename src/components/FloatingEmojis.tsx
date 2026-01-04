import { useEffect, useState } from 'react';

const emojis = ['🐕', '🦮', '🐩', '🐾', '🦴', '🎾', '❤️', '🏃', '🌳', '☀️', '🐶', '🐕‍🦺'];

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

interface FloatingEmojisProps {
  count?: number;
  className?: string;
}

const FloatingEmojis = ({ count = 20, className = '' }: FloatingEmojisProps) => {
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generated: FloatingEmoji[] = [];
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 16 + Math.random() * 24,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4,
      });
    }
    setFloatingEmojis(generated);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {floatingEmojis.map((item) => (
        <span
          key={item.id}
          className="absolute opacity-20 select-none animate-float-emoji"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
