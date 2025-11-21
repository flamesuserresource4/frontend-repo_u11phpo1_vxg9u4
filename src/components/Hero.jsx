import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D Spline scene */}
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            New: Real-time fraud intelligence
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Payments for the modern internet
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
            Build sleek checkout flows, global payouts, and embedded finance with a single, unified platform.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90 transition">Start building</button>
            <button className="px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">Contact sales</button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/60">
            <div className="text-sm">PCI Level 1</div>
            <div className="h-4 w-px bg-white/15" />
            <div className="text-sm">99.999% uptime</div>
            <div className="h-4 w-px bg-white/15" />
            <div className="text-sm">135+ currencies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
