import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";

export interface DisplayCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  iconClassName?: string;
  titleClassName?: string;
  className?: string;
}

interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export const DisplayCards: React.FC<DisplayCardsProps> = ({ cards }) => {
  const overlap = 48;
  const angleStep = 4; // degrees
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="relative w-full max-w-[420px] mx-auto mb-8 overflow-visible" style={{ minHeight: 220 + (cards.length - 1) * 24 }}>
      {cards.map((card, idx) => {
        const isHovered = hovered === idx;
        return (
          <div
            key={idx}
            className={`absolute left-0 top-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-xl border border-gray-200 p-4 flex flex-col gap-2 cursor-pointer w-full text-left overflow-visible transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isHovered ? 'shadow-2xl' : 'shadow-lg'} ${card.className ?? ''}`}
            style={{
              zIndex: isHovered ? 50 : 10 + idx,
              transform: isHovered
                ? `translateY(${idx * overlap - 24}px) scale(1.06) rotate(${(idx - 1) * angleStep}deg)`
                : `translateY(${idx * overlap}px) scale(0.98) rotate(${(idx - 1) * angleStep}deg)`,
              borderLeft: '6px solid #38bdf8',
              ...((isHovered ? { boxShadow: '0 8px 32px 0 rgba(56,189,248,0.15)' } : {})),
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-2 mb-1">
              {/* Avatar with initials */}
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg shadow-sm border border-blue-200">
                {(() => {
                  const match = card.description.match(/([A-Z])[a-z]+\s([A-Z])[a-z]+/i);
                  return match ? match.slice(1, 3).join("") : "?";
                })()}
              </div>
              <span className={`ml-1 text-2xl ${card.iconClassName ?? ''}`}>{card.icon}</span>
            </div>
            <div className={`text-xl font-semibold mb-1 ${card.titleClassName ?? ''}`}>{card.title}</div>
            <div className="text-gray-600 text-lg mb-2">{card.description}</div>
            <div className="text-base text-gray-400 mt-auto">{card.date}</div>
          </div>
        );
      })}
    </div>
  );
}; 