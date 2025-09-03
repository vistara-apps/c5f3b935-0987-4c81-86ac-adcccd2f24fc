'use client';

interface CompatibilityCardProps {
  variant: 'synastry';
  user1Sign: string;
  user2Sign: string;
  compatibilityScore: number;
  summary: string;
  harmonyPoints: string[];
  conflictPoints: string[];
}

export function CompatibilityCard({
  user1Sign,
  user2Sign,
  compatibilityScore,
  summary,
  harmonyPoints,
  conflictPoints
}: CompatibilityCardProps) {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Synastry Report</h3>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent">{compatibilityScore}%</div>
          <div className="text-xs text-white/60">Compatibility</div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-semibold">{user1Sign.slice(0, 2)}</span>
          </div>
          <span className="text-white/90">{user1Sign}</span>
        </div>
        <div className="text-accent">💖</div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-semibold">{user2Sign.slice(0, 2)}</span>
          </div>
          <span className="text-white/90">{user2Sign}</span>
        </div>
      </div>
      
      <p className="text-white/80 mb-6 leading-relaxed">
        {summary}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
          <h4 className="font-medium text-green-400 mb-2">Harmony Points</h4>
          <ul className="text-sm text-white/80 space-y-1">
            {harmonyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
          <h4 className="font-medium text-yellow-400 mb-2">Growth Areas</h4>
          <ul className="text-sm text-white/80 space-y-1">
            {conflictPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
