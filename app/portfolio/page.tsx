'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Shield, Server, Cpu, Github, Linkedin, Terminal, ChevronRight , ExternalLink} from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-x-hidden">
      
      {/* 1. BLUEPRINT GRID BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #3f3f46 1px, transparent 1px),
            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto p-6 md:p-16 space-y-16">
        
        {/* NAV OVERLAY */}
        <nav className="flex justify-between items-center border-b border-zinc-800 pb-6">
          <Link href="/" className="text-[10px] text-zinc-500 hover:text-red-600 transition-colors uppercase tracking-[0.3em]">
            &lt; Return_to_Mainframe
          </Link>
          <div className="text-[10px] text-zinc-600 uppercase tracking-widest">
            Profile_ID: <span className="text-zinc-300 underline">Mochajoe</span>
          </div>
        </nav>

       {/* HEADER SECTION */}
<header className="flex flex-col md:flex-row items-center gap-12">
  <div className="relative group w-fit"> {/* w-fit ensures the whole thing hugs the image */}
    
    {/*Adds top-right and bottom-left for a full wrap) */}
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 z-30 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 z-30 animate-pulse"></div>

    {/* 3. THE IMAGE CONTAINER */}
    <div className="h-60 border-2 border-zinc-800 bg-black overflow-hidden relative">
      <img
        src="/me-2.jpeg" 
        alt="Joseph Ducharme"
        className="h-75 w-75 grayscale hover:grayscale-0 transition-all duration-500 object-cover"
      />
      
      {/* 4. OVERLAY SCANLINE (Adds to the NASA vibe) */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent h-1/2 w-full animate-scan opacity-20 pointer-events-none"></div>
    </div>
  </div>
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
              Joseph <span className="text-red-600">Ducharme</span>
            </h1>
            <p className="text-sm text-zinc-500 font-bold uppercase tracking-[0.4em]">
              IT Tech // Home Lab Enthusiast // Linux Advocate 
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
               <div className="h-0.5 w-12 bg-red-600"></div>
               <p className="text-xs text-zinc-400 uppercase tracking-widest italic">
                I am currently seeking a <span className="text-white font-bold">Systems Engineering</span> or <span className="text-white font-bold">SOC Analyst</span> role where I can deploy my expertise in Identity Management and automated security workflows.
               </p>
            </div>
          </div>
        </header>

       

        {/* MISSION LOGS (About Me) */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-900 pt-12">
  
  {/* LEFT COLUMN: Mission Title + Social Actions */}
  <div className="md:col-span-1 space-y-8">
    <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm sticky top-24">
      Mission_Log
    </h2>
    
    {/* Buttons moved here and made bigger */}
    <div className="flex flex-col gap-3 sticky top-36">
      <a 
        href="https://github.com/its-mocha" 
        target="_blank" 
        className="flex items-center justify-between group border border-zinc-800 bg-zinc-950/50 px-4 py-3 hover:border-red-600 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
          <span className="text-xs uppercase font-bold tracking-widest group-hover:text-white">GitHub</span>
        </div>
        <ExternalLink className="w-3 h-3 text-zinc-700 group-hover:text-red-600" />
      </a>

      <a 
        href="https://linkedin.com/in/itsmocha" 
        target="_blank" 
        className="flex items-center justify-between group border border-zinc-800 bg-zinc-950/50 px-4 py-3 hover:border-red-600 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
          <span className="text-xs uppercase font-bold tracking-widest group-hover:text-white">LinkedIn</span>
        </div>
        <ExternalLink className="w-3 h-3 text-zinc-700 group-hover:text-red-600" />
      </a>
    </div>
  </div>

  <div className="md:col-span-2 space-y-8 text-zinc-400 leading-relaxed text-sm font-sans">
  {/* PROFESSIONAL DEPLOYMENT */}
  <div className="space-y-4">
    <div className="flex items-center gap-2 text-[10px] text-red-600 font-bold uppercase tracking-[0.2em]">
      <div className="w-1 h-1 bg-red-600"></div> Professional_Deployment
    </div>
    <p>
      Serving as an <strong className="text-white uppercase tracking-tighter">IT Technician</strong> at <strong className="text-red-600">Ducommun AeroStructures</strong>. I specialize in <strong className="text-white">Identity Management</strong> and security infrastructure, driving CMMC compliance and hardening enterprise nodes. 
    </p>
    <p>
      I manage a fleet of <strong className="text-white">200+ endpoints</strong>, orchestrating large-scale <strong className="text-white">Windows 11 migrations</strong> and Active Directory administration. I bridge the gap between high-level backend security and end-user operational efficiency.
    </p>
  </div>

  {/* HOME LAB & DEV OPERATIONS */}
  <div className="space-y-4">
    <div className="flex items-center gap-2 text-[10px] text-red-600 font-bold uppercase tracking-[0.2em]">
      <div className="w-1 h-1 bg-red-600"></div> Lab_Ops_&_Dev
    </div>
    <p>
      In my private sector, I maintain a high-availability <strong className="text-white">Proxmox Cluster</strong> utilizing <strong className="text-white">ZFS Mirroring</strong> and <strong className="text-white">pfSense</strong> for network edge security. This environment serves as the staging ground for my automated Python telemetry scripts and AI integrations.
    </p>
    <p>
      This platform (mochajoe.dev) is a full-stack <strong className="text-white">Next.js</strong> implementation designed to interface with my local infrastructure. It serves as a live demonstration of my ability to deploy modern web technologies that sync with backend containerized services.
    </p>
  </div>
  <div className="pt-4 italic text-zinc-500 text-xs border-l border-red-600 pl-4">
    "Operating with a 'Do whatever it takes' methodology to ensure 99.9% uptime and infrastructure integrity."
  </div>

  {/* CORE HEURISTICS (Skill Set) */}
  <div className="pt-4 grid grid-cols-2 gap-4 border-t border-zinc-900">
    <div>
      <span className="block text-[10px] text-zinc-600 uppercase mb-2">Primary_Stack</span>
      <ul className="text-[11px] space-y-1 text-zinc-300 uppercase">
        <li>// Python Automation</li>
        <li>// Next.js / React</li>
        <li>// Active Directory / GPO</li>
      </ul>
    </div>
    <div>
      <span className="block text-[10px] text-zinc-600 uppercase mb-2">Security_Protocol</span>
      <ul className="text-[11px] space-y-1 text-zinc-300 uppercase">
        <li>// CrowdStrike / Tanium</li>
        <li>// MFA / Identity Security</li>
        <li>// CMMC Compliance</li>
      </ul>
    </div>
  </div>

  
</div>
</section>


        {/* EDUCATION & CERTS */}
        <footer className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between gap-8 opacity-60">
          <div>
             <h3 className="text-zinc-200 font-bold mb-4 text-[15px] uppercase tracking-widest">Education</h3>
             <p className="text-[12px] font-bold">B.S. Computer Science <span className="text-zinc-600 text-[12px] font-normal">// SNHU</span></p>
          </div>
          <div>
             <h3 className="text-zinc-200 font-bold mb-4 text-[15px] uppercase tracking-widest">Certifications</h3>
             <p className="text-[12px] font-bold text-red-600">CompTIA Security+ <span className="text-zinc-400 text-[10px] font-normal uppercase italic tracking-tighter">// In Progress 2026</span></p>
             <p className="text-xs mt-1">Google Networking Fundamentals</p>
          </div>
        </footer>
      </div>
    </main>
  );
}