export default function Pricing(){
  const tiers = [
    { name: 'Starter', price: 'Free', desc: 'Test mode and sandbox tools', cta: 'Get started', features: ['No code checkout', 'Test cards', 'Basic analytics'] },
    { name: 'Scale', price: '2.9% + 30¢', desc: 'Per successful card charge', cta: 'Talk to sales', features: ['Volume discounts', 'Advanced fraud', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', desc: 'For complex use cases', cta: 'Contact us', features: ['Dedicated SRE', 'Uptime SLA', 'Custom integrations'] },
  ];

  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Simple, transparent pricing</h2>
          <p className="mt-4 text-white/70">Only pay for what you use. No monthly minimums. No hidden fees.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-white font-semibold">{t.name}</h3>
                <span className="text-white/70 text-sm">{t.desc}</span>
              </div>
              <div className="text-3xl text-white font-semibold">{t.price}</div>
              <ul className="mt-6 space-y-2 text-white/70 text-sm">
                {t.features.map((f) => (<li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />{f}</li>))}
              </ul>
              <button className="mt-6 w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90 transition">{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
