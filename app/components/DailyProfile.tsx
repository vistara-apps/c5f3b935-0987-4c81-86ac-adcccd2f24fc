'use client';

interface DailyProfileProps {
  userSign: string;
}

export function DailyProfile({ userSign }: DailyProfileProps) {
  const mockData = {
    energy: 86.5,
    mood: 'Optimistic',
    luckyNumber: 7,
    luckyColor: 'Royal Blue',
    compatibility: [
      { sign: 'Sagittarius', score: 92 },
      { sign: 'Gemini', score: 88 },
      { sign: 'Libra', score: 85 },
    ]
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-slide-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Daily Profile</h3>
        <div className="text-accent text-sm">{userSign}</div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/70">Energy Level</span>
            <span className="text-white font-medium">{mockData.energy}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
              style={{ width: `${mockData.energy}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface/30 rounded-lg p-3">
            <div className="text-white/70 text-sm">Mood</div>
            <div className="text-white font-medium">{mockData.mood}</div>
          </div>
          <div className="bg-surface/30 rounded-lg p-3">
            <div className="text-white/70 text-sm">Lucky #</div>
            <div className="text-white font-medium">{mockData.luckyNumber}</div>
          </div>
        </div>

        <div className="bg-surface/30 rounded-lg p-3">
          <div className="text-white/70 text-sm mb-2">Lucky Color</div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            <span className="text-white font-medium">{mockData.luckyColor}</span>
          </div>
        </div>

        <div>
          <div className="text-white/70 text-sm mb-3">Top Compatibility Today</div>
          <div className="space-y-2">
            {mockData.compatibility.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-white text-sm">{item.sign}</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 bg-white/10 rounded-full h-1">
                    <div 
                      className="bg-accent h-1 rounded-full"
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                  <span className="text-accent text-xs font-medium">{item.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
