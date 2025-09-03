'use client';

import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { HoroscopeCard } from './components/HoroscopeCard';
import { CompatibilityCard } from './components/CompatibilityCard';
import { ZodiacWheel } from './components/ZodiacWheel';
import { DailyProfile } from './components/DailyProfile';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
import { Sparkles, Users, Calendar } from 'lucide-react';

export default function Home() {
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState('horoscope');
  const [userSign, setUserSign] = useState<string>('Leo');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isConnected) {
    return (
      <div className="min-h-screen cosmic-gradient flex items-center justify-center p-4">
        <div className="star-field absolute inset-0"></div>
        <div className="text-center z-10 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-white">✨ AstroFlow</h1>
            <p className="text-lg text-white/80">Navigate your day with personalized astrological insights</p>
          </div>
          <div className="bg-surface/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <p className="text-white/90 mb-6">Connect your wallet to access your personalized cosmic journey</p>
            <ConnectWallet />
          </div>
        </div>
      </div>
    );
  }

  return (
    <AppShell>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-surface/30 backdrop-blur-sm border-r border-white/10 p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              ✨ AstroFlow
            </h1>
          </div>
          
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('horoscope')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'horoscope' 
                  ? 'bg-primary text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              AstroFlow
            </button>
            <button
              onClick={() => setActiveTab('compatibility')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'compatibility' 
                  ? 'bg-primary text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-5 h-5" />
              Compatibility
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'events' 
                  ? 'bg-primary text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Event Readings
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'horoscope' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Center Zodiac Wheel */}
                <div className="lg:col-span-2 flex items-center justify-center">
                  <ZodiacWheel userSign={userSign} />
                </div>
                
                {/* Right Sidebar - Daily Profile */}
                <div className="space-y-6">
                  <DailyProfile userSign={userSign} />
                  <HoroscopeCard
                    variant="daily"
                    sign={userSign}
                    date={new Date().toLocaleDateString()}
                    title="Daily Horoscope"
                    content="The cosmic energies are aligning in your favor today. Venus in your fifth house brings opportunities for creative expression and romance. Mars energy suggests taking bold action on projects you've been considering."
                  />
                </div>
              </div>
            )}

            {activeTab === 'compatibility' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CompatibilityCard
                  variant="synastry"
                  user1Sign="Leo"
                  user2Sign="Gemini"
                  compatibilityScore={85}
                  summary="A dynamic and exciting combination! Leo's warmth complements Gemini's intellectual curiosity perfectly."
                  harmonyPoints={['Communication flows naturally', 'Shared love for adventure', 'Mutual respect for independence']}
                  conflictPoints={['Different approaches to commitment', 'Leo needs more attention than Gemini typically gives']}
                />
                
                <div className="bg-card rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Generate New Synastry Report</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/70 mb-2">Partner's Birth Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-surface rounded-lg border border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 mb-2">Birth Time (optional)</label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 bg-surface rounded-lg border border-white/20 text-white"
                      />
                    </div>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg transition-colors">
                      Generate Compatibility Report
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Create Event Reading</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 mb-2">Event Type</label>
                      <select className="w-full px-3 py-2 bg-surface rounded-lg border border-white/20 text-white">
                        <option>Job Interview</option>
                        <option>First Date</option>
                        <option>Travel</option>
                        <option>Important Meeting</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/70 mb-2">Event Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-surface rounded-lg border border-white/20 text-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-white/70 mb-2">Additional Details (optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Any specific concerns or areas you'd like guidance on..."
                        className="w-full px-3 py-2 bg-surface rounded-lg border border-white/20 text-white placeholder-white/50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-lg transition-colors">
                        Generate Event Reading
                      </button>
                    </div>
                  </div>
                </div>

                <HoroscopeCard
                  variant="event"
                  sign={userSign}
                  date="Tomorrow"
                  title="Job Interview - Career Guidance"
                  content="Tomorrow's planetary alignment strongly supports your professional endeavors. Mercury in your career sector enhances communication skills, while Jupiter brings opportunities for advancement. Wear blue for confidence and arrive 10 minutes early to align with favorable timing."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
