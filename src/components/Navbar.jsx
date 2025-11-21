import { Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow ring-1 ring-white/20" />
              <span className="text-white text-lg font-semibold tracking-tight">NovaPay</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#" className="hover:text-white transition">Products</a>
              <a href="#" className="hover:text-white transition">Solutions</a>
              <a href="#" className="hover:text-white transition flex items-center gap-1">Developers <ChevronDown size={16} className="opacity-60" /></a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg text-white/80 hover:text-white transition">Sign in</button>
              <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-white/90 transition">Start now</button>
            </div>

            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/10 text-white/80">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
