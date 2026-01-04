
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { geminiService } from '../services/geminiService';

const data = [
  { name: 'Jan', value: 400, users: 240 },
  { name: 'Feb', value: 300, users: 139 },
  { name: 'Mär', value: 200, users: 980 },
  { name: 'Apr', value: 278, users: 390 },
  { name: 'Mai', value: 189, users: 480 },
  { name: 'Jun', value: 239, users: 380 },
  { name: 'Jul', value: 349, users: 430 },
];

export const Dashboard: React.FC = () => {
  const [insight, setInsight] = useState<string>("Analysiere Trends...");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInsights = async () => {
      const res = await geminiService.getDashboardInsights(data);
      setInsight(res);
      setLoading(false);
    };
    fetchInsights();
  }, []);

  return (
    <div className="p-6 md:p-8 space-y-8 bg-slate-50">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Willkommen zurück, Admin</h1>
          <p className="text-slate-500">Hier ist die Übersicht deiner heutigen Performance.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">Exportieren</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">Neues Projekt</button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Gesamtumsatz', value: '€45,231', change: '+12.5%', color: 'text-emerald-600' },
          { label: 'Aktive Nutzer', value: '2,345', change: '+3.2%', color: 'text-emerald-600' },
          { label: 'Conversion Rate', value: '4.8%', change: '-0.4%', color: 'text-rose-600' },
          { label: 'Absprungrate', value: '24.1%', change: '-1.2%', color: 'text-emerald-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-full bg-slate-50 ${stat.color}`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Umsatzübersicht</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `€${value}`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  cursor={{ stroke: '#4f46e5', strokeWidth: 2 }}
                />
                <Area type="monotone" dataKey="value" stroke="#4f46e5" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-2xl text-white shadow-xl flex flex-col">
          <div className="flex items-center space-x-2 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-bold text-lg">KI Insights</h3>
          </div>
          <div className="flex-grow flex items-center justify-center">
            {loading ? (
              <div className="animate-pulse flex space-x-2">
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
            ) : (
              <p className="text-indigo-100 leading-relaxed italic">
                "{insight}"
              </p>
            )}
          </div>
          <button className="mt-6 w-full py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
            Bericht anfordern
          </button>
        </div>
      </div>
    </div>
  );
};
