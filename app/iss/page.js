"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

/**
 * Leaflet must be loaded client-side only
 */
const IssMap = dynamic(() => import("./issmap"), {
  ssr: false,
});

export default function IssPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        const res = await fetch("https://mochajoe.dev/api/iss/latest");
        if (!res.ok) throw new Error(`API error ${res.status}`);
        setData(await res.json());
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 3000);
    return () => clearInterval(interval);
  }, []);

 
  const status =
    data?.age_seconds < 5
      ? "LIVE"
      : data?.age_seconds < 15
      ? "STALE"
      : "NO DATA";


  return (
    <main className="min-h-screen bg-black text-zinc-300 font-mono relative overflow-x-hidden">
        {/* NAV OVERLAY (GLOBAL, STABLE) */}

  <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-1000">
    <Link
      href="/"
      className="text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-[0.3em]
                 border border-red-600 px-3 py-1 bg-black/70 backdrop-blur"
    >
      &lt; Return to Mainframe
    </Link>

    <div className="text-[10px] text-zinc-600 uppercase tracking-widest">
      Profile_ID: <span className="text-zinc-300 underline">Mochajoe</span>
    </div>
  </div>

      {/* BLUEPRINT GRID */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3f3f46 1px, transparent 1px),
            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      
      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto p-6 pt-24 md:pt-32 md:p-16 space-y-12">

        {/* HEADER */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight italic">
            🛰 ISS <span className="text-red-600">Mission Status</span>
          </h1>

          <p className="text-xs text-zinc-500 uppercase tracking-[0.3em]">
            Real-Time Orbital Telemetry Feed
          </p>

          <div className="h-0.5 w-12 bg-red-600" />
        </header>

        {/* STATUS BLOCK */}
        {error && (
          <div className="text-red-500 text-xs uppercase tracking-widest">
            Error: {error}
          </div>
        )}

        {!data && !error && (
          <div className="text-zinc-500 text-xs uppercase tracking-widest">
            Loading telemetry…
          </div>
        )}

        {data && (
          <section className="grid grid-cols-2 md:grid-cols-3 gap-6 text-xs uppercase tracking-widest text-zinc-400">
            <div>
  Status:{" "}
  <span
    className={`font-bold ${
      status === "LIVE"
        ? "text-green-500"
        : status === "STALE"
        ? "text-yellow-400"
        : "text-red-500"
    }`}
  >
    {status}
  </span>
</div>
            <div>Latitude: {data.latitude.toFixed(2)}°</div>
            <div>Longitude: {data.longitude.toFixed(2)}°</div>
            <div>Altitude: {data.altitude_km.toFixed(1)} km</div>
            <div>Velocity: {data.velocity_kmh.toFixed(0)} km/h</div>
            <div>Heading: {data.heading?.toFixed(1) ?? 0}°</div>
          </section>
        )}

        {/* MAP */}
        {data && (
          <div className="border border-zinc-800 bg-black/50 p-2">
            <IssMap
              lat={data.latitude}
              lon={data.longitude}
              heading={data.heading ?? 0}
              status={status}
            />
          </div>
        )}
      </div>
    </main>
    

  );
}
