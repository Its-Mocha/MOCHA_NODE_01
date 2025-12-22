'use client';

import React, { useEffect, useState } from 'react';

export default function StatsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchData = async () => {
    try {
      // We fetch from our OWN server route now
      const response = await fetch('/api/pihole');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
      setLoading(false);
    }
  };

  fetchData();
}, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-cyber-blue animate-pulse font-mono">INITIALIZING TELEMETRY...</div>
      </div>
    );
  }

  const stats = [
    { 
    label: 'Total Queries', 
    value: data?.dns_queries_today?.toLocaleString() ?? '0',
    color: 'text-cyber-blue'
  },
  { 
    label: 'Blocked', 
    value: data?.ads_blocked_today?.toLocaleString() ?? '0',
    color: 'text-red-500'
  },
  { 
    label: 'Block Percent', 
    value: `${data?.ads_percentage_today ?? 0}%`,
    color: 'text-yellow-500'
  },
  { 
    label: 'Gravity List', 
    value: data?.domains_being_blocked?.toLocaleString() ?? '0',
    color: 'text-green-500'
  },
  ];

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 uppercase tracking-tighter">
            Network <span className="text-cyber-blue text-glow">Telemetry</span>
          </h1>
          <p className="text-gray-500 font-mono text-sm">
            SOURCE: DOCKER ON A UBUNTUSERVER | SERVICE: PI-HOLE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-800 p-6 rounded-sm shadow-2xl">
              <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 italic">
                {stat.label}
              </h3>
              <p className={`text-3xl font-black ${stat.color} font-mono`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest border-t border-slate-900 pt-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
            Connection: ONLINE
          </div>
          <div>
            Status: {data?.status === 'enabled' ? 'Active' : 'Standby'}
          </div>
        </div>
      </div>
    </main>
  );
}