
import React from 'react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  view: AppView;
  setView: (view: AppView) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, view, setView }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">W</div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">WebSuite</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <button 
                onClick={() => setView(AppView.LANDING)}
                className={`text-sm font-medium transition-colors ${view === AppView.LANDING ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-500'}`}
              >
                Website
              </button>
              <button 
                onClick={() => setView(AppView.DASHBOARD)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${view === AppView.DASHBOARD ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer (Simple) */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 WebSuite Project Structure. Built with React & Gemini AI.</p>
        </div>
      </footer>
    </div>
  );
};
