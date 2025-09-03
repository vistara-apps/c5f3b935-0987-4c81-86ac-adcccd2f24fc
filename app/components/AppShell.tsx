'use client';

import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen cosmic-gradient relative overflow-hidden">
      <div className="star-field absolute inset-0"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
