'use client';

interface HoroscopeCardProps {
  variant: 'daily' | 'event';
  sign: string;
  date: string;
  title: string;
  content: string;
}

export function HoroscopeCard({ variant, sign, date, title, content }: HoroscopeCardProps) {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-accent text-sm font-medium">{date}</span>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">{sign.slice(0, 2)}</span>
        </div>
        <span className="text-white/90 font-medium">{sign}</span>
      </div>
      
      <p className="text-white/80 leading-relaxed">
        {content}
      </p>
      
      {variant === 'event' && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-accent text-sm">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span>Optimal timing and cosmic guidance included</span>
          </div>
        </div>
      )}
    </div>
  );
}
