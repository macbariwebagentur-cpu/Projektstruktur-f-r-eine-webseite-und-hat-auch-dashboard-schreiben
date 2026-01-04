
import React from 'react';

export const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Die Zukunft des <span className="text-indigo-600">Web-Designs</span> ist hier.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          Eine moderne Architektur für performante Webseiten und integrierte Dashboards. Skalierbar, sauber und intelligent.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
            Jetzt starten
          </button>
          <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all">
            Demo ansehen
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-50 py-2