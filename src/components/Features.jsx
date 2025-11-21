import { Shield, Globe, Rocket, Code2 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:bg-white/[0.05] transition">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
      <Icon className="text-white" size={18} />
    </div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function Features(){
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">A platform engineered for scale</h2>
          <p className="mt-4 text-white/70">Everything you need to launch, optimize, and grow your fintech products worldwide.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Rocket} title="Lightning-fast" desc="Low-latency APIs and global edge network for instant payment experiences." />
          <FeatureCard icon={Shield} title="Bank-grade security" desc="End-to-end encryption, tokenization, and continuous compliance." />
          <FeatureCard icon={Globe} title="Global by default" desc="Go live in 40+ countries with local rails and currency support." />
          <FeatureCard icon={Code2} title="Built for developers" desc="Clear docs, SDKs, and test mode that just works." />
        </div>
      </div>
    </section>
  );
}
