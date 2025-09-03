'use client';

import { useState } from 'react';

interface ZodiacWheelProps {
  userSign: string;
}

const zodiacSigns = [
  { name: 'Aries', symbol: '♈', angle: 0 },
  { name: 'Taurus', symbol: '♉', angle: 30 },
  { name: 'Gemini', symbol: '♊', angle: 60 },
  { name: 'Cancer', symbol: '♋', angle: 90 },
  { name: 'Leo', symbol: '♌', angle: 120 },
  { name: 'Virgo', symbol: '♍', angle: 150 },
  { name: 'Libra', symbol: '♎', angle: 180 },
  { name: 'Scorpio', symbol: '♏', angle: 210 },
  { name: 'Sagittarius', symbol: '♐', angle: 240 },
  { name: 'Capricorn', symbol: '♑', angle: 270 },
  { name: 'Aquarius', symbol: '♒', angle: 300 },
  { name: 'Pisces', symbol: '♓', angle: 330 },
];

export function ZodiacWheel({ userSign }: ZodiacWheelProps) {
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Outer ring - Zodiac signs */}
      <div className="absolute inset-0 rounded-full border-2 border-white/20">
        {zodiacSigns.map((sign) => {
          const isActive = sign.name === userSign;
          const isHovered = sign.name === hoveredSign;
          const radius = 140;
          const x = Math.cos((sign.angle - 90) * Math.PI / 180) * radius;
          const y = Math.sin((sign.angle - 90) * Math.PI / 180) * radius;
          
          return (
            <div
              key={sign.name}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all cursor-pointer ${
                isActive 
                  ? 'bg-primary text-white scale-110 shadow-lg' 
                  : isHovered
                  ? 'bg-accent/20 text-accent scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
              }}
              onMouseEnter={() => setHoveredSign(sign.name)}
              onMouseLeave={() => setHoveredSign(null)}
              title={sign.name}
            >
              {sign.symbol}
            </div>
          );
        })}
      </div>

      {/* Middle ring - Planetary positions */}
      <div className="absolute inset-8 rounded-full border border-white/10 bg-white/5">
        <div className="absolute inset-4 rounded-full border border-accent/30 bg-gradient-to-br from-primary/10 to-accent/10">
          {/* Central cosmic symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl animate-pulse">
              ✨
            </div>
          </div>
        </div>
      </div>

      {/* Rotating cosmic elements */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '60s' }}>
        <div className="absolute top-4 left-1/2 w-2 h-2 bg-white/40 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-accent/60 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute left-4 top-1/2 w-2 h-2 bg-primary/60 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute right-4 top-1/2 w-2 h-2 bg-yellow-400/60 rounded-full transform -translate-y-1/2"></div>
      </div>

      {/* Sign details popup */}
      {hoveredSign && (
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-white/20 animate-fade-in">
          <div className="text-center">
            <div className="text-lg font-semibold text-white">{hoveredSign}</div>
            <div className="text-sm text-white/70">
              {zodiacSigns.find(s => s.name === hoveredSign)?.symbol}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
