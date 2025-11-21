import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* subtle starfield / gradient background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_40%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(800px_400px_at_80%_-10%,rgba(99,102,241,0.15),transparent)]" />

      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Pricing />

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 ring-1 ring-white/20" />
            <span className="text-white/70 text-sm">© {new Date().getFullYear()} NovaPay, Inc.</span>
          </div>
          <div className="text-white/60 text-sm flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
