import React from 'react';
import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-mono selection:bg-red-500/30 overflow-hidden relative">
      
      {/* 1. THE GRID BACKGROUND */}
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

      {/* 2. SCANLINE OVERLAY (Optional but adds to the vibe) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]"></div>

      {/* 3. CONTENT WRAPPER */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* TOP HUD */}
        <header className="border-b border-zinc-800 bg-black/80 p-4 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-red-600 shadow-[0_0_10px_red] animate-pulse"></div>
              <span className="text-[15px] tracking-[0.4em] uppercase font-bold text-zinc-400">Mainframe</span>
            </div>
            <div className="text-[15px] text-red-600 uppercase tracking-widest animate-pulse">
              System_Online
            </div>
          </div>
        </header>

        <main className="grow flex flex-col justify-center max-w-6xl mx-auto px-6 w-full">
          
{/* TITLE SECTION */}
<div className="mb-16 border-l-2 border-red-600 pl-8">
  <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
    Control <br />
    <span className="text-zinc-500">Center</span>
  </h1>
  
  {/* MISSION BRIEFING (Your new section) */}
  <div className="mt-6 max-w-xl">
    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans tracking-wide">
      <span className="text-red-600 font-bold uppercase mr-2">[Briefing]</span> 
      Welcome to the <span className="text-white">Mainframe</span>. This is my central landing page where you can monitor 
      live <span className="text-white">Network Stats</span> from my Pi-hole, explore my <span className="text-white">Development Portfolio</span>, 
      or interface with my <span className="text-white">AI Terminal</span>.
    </p>
  </div>

  <div className="flex gap-4 mt-6 text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold">
    <span>Operator: Mochajoe</span>
    <span>//</span>
    <span>Status: Active</span>
  </div>
</div>
          
          {/* MODULE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            
            

            {/* PORTFOLIO MODULE */}
            <Link href="/portfolio" className="group bg-zinc-950/80 border border-zinc-800 p-8 hover:bg-red-950/10 hover:border-red-600 transition-all">
              <span className="text-red-600 text-xs mb-2 block font-bold">01</span>
              <h2 className="text-xl font-bold uppercase group-hover:tracking-widest transition-all">Portfolio</h2>
              <p className="text-zinc-500 text-[10px] mt-4 leading-relaxed uppercase tracking-tighter">
                Dev Archive / Proxmox Lab / Infrastructure Docs
              </p>
            </Link>

            {/* STATS MODULE */}
            <Link href="/stats" className="group bg-zinc-950/80 border border-zinc-800 p-8 hover:bg-red-950/10 hover:border-red-600 transition-all">
              <span className="text-red-600 text-xs mb-2 block font-bold">02</span>
              <h2 className="text-xl font-bold uppercase group-hover:tracking-widest transition-all">Network Stats</h2>
              <p className="text-zinc-500 text-[10px] mt-4 leading-relaxed uppercase tracking-tighter">
                Pi-Hole Telemetry / Python Script Logs / Cloud Sync
              </p>
            </Link>

            {/* AI MODULE */}
            <a href="https://ai.mochajoe.dev" target="_blank" rel="noopener noreferrer" className="group bg-zinc-950/80 border border-zinc-800 p-8 hover:bg-red-950/10 hover:border-red-600 transition-all">
              <span className="text-red-600 text-xs mb-2 block font-bold">03</span>
              <h2 className="text-xl font-bold uppercase group-hover:tracking-widest transition-all">AI Terminal</h2>
              <p className="text-zinc-500 text-[10px] mt-4 leading-relaxed uppercase tracking-tighter">
                LLM Integration / Heuristic Processing / Neural Link
              </p>
           </a>

          </div>
        

        {/* HARDWARE MANIFEST (System Specs) */}
<section className="bg-zinc-950 border border-zinc-800 p-1 mt-12">
  <div className="bg-zinc-900/50 p-6 md:p-8 border border-zinc-800">
    {/* Header with extra bottom margin */}
    <div className="flex items-center gap-2 mb-8 text-red-600 font-bold uppercase tracking-[0.2em] text-xs">
      <Terminal className="w-4 h-4" /> Hardware_Manifest
    </div>
    
    {/* Changed to grid-cols-3 to match your 3 items */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12">
      {[
        { label: "Host", val: "2 Clustered Proxmox VE Nodes" },
        { label: "GPU", val: "RTX A2000 6GB // DeepSeek-R1" },
        { label: "Network", val: "pfSense, Pi-hole, TP-Link Managed switch" }
      ].map((item, i) => (
        <div key={i} className="relative border-l border-zinc-800 pl-6 group">
          {/* Subtle hover accent */}
          <div className="absolute left-0 top-0 w-px h-0 bg-red-600 group-hover:h-full transition-all duration-300"></div>
          
          <span className="block text-[10px] text-zinc-500 uppercase mb-2 tracking-widest font-bold">
            {item.label}
          </span>
          
          {/* leading-relaxed helps the long strings look better if they wrap */}
          <span className="text-xs md:text-sm text-zinc-200 font-bold leading-relaxed block">
            {item.val}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
</main>
      </div>
    </div>
  );
}