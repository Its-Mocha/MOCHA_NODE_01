'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StatsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-600 animate-pulse font-mono tracking-widest text-sm">
          [ INITIALIZING TELEMETRY UPLINK... ]
        </div>
      </div>
    );
  }

  const stats = [
    { 
      label: 'DNS Queries', 
      value: data?.dns_queries_today?.toLocaleString() ?? '0',
      color: 'text-white'
    },
    { 
      label: 'Ads Blocked', 
      value: data?.ads_blocked_today?.toLocaleString() ?? '0',
      color: 'text-red-600'
    },
    { 
      label: 'Block Ratio', 
      value: `${data?.ads_percentage_today ?? 0}%`,
      color: 'text-zinc-400'
    },
    { 
      label: 'Gravity List', 
      value: data?.domains_being_blocked?.toLocaleString() ?? '0',
      color: 'text-zinc-500'
    },
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-100 font-mono relative overflow-hidden flex flex-col items-center justify-center p-6">
      
      {/* 1. BLUEPRINT GRID BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #3f3f46 1px, transparent 1px),
            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* 2. NAVIGATION OVERLAY */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center z-20">
        <Link href="/" className="text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-[0.3em] border border-red-600 px-3 py-1 bg-black/50">
          &lt; Return to Mainframe
        </Link>
        <div className="text-[10px] text-green-600 uppercase tracking-widest animate-pulse">
            Terminal Active
        </div>
      </div>

      <div className="w-full max-w-5xl relative z-10 mt-12">
        {/* 3. HEADER SECTION */}
        <div className="mb-12 border-l-2 border-red-600 pl-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter">
            Network <span className="text-red-600">Telemetry</span>
          </h1>
          <p className="text-zinc-500 text-[10px] tracking-widest uppercase">
            Source: Scripts-CT Container // Service: Pi-hole Node
          </p>
        </div>

        {/* 4. MAIN STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zinc-950/80 border border-zinc-900 p-8 hover:bg-red-950/10 transition-colors group">
              <h3 className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 group-hover:text-red-600 transition-colors">
                {stat.label}
              </h3>
              <p className={`text-3xl font-black ${stat.color} tracking-tighter`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* 5. DYNAMIC FOOTER (Where your Python Timestamp lives) */}
        <div className="mt-1 flex flex-col md:flex-row justify-between bg-zinc-950/80 border border-zinc-900 p-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Last Sync Event</span>
              {/* This is the timestamp from your Python script */}
              <span className="text-sm text-white font-bold">{data?.last_updated ?? 'PENDING UPLINK...'}</span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[10px] text-zinc-500 uppercase tracking-widest">
            <div>
             Status: <span className={data ? 'text-green-500' : 'text-red-600'}>
            {data ? 'NOMINAL' : 'OFFLINE'}
            </span>
            </div>
            <div className="hidden md:block">
              Connection: <span className="text-zinc-300 italic underline">Encrypted_Uplink</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}