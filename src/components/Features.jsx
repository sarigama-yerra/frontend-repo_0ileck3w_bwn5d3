import { Building2, ShieldCheck, Clock3 } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: 'Guaranteed rent',
      desc: 'Fixed monthly income with no voids for the length of the agreement.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      title: 'Fully managed',
      desc: 'We handle tenanting, maintenance coordination, and compliance.'
    },
    {
      icon: <Clock3 className="w-6 h-6 text-cyan-400" />,
      title: 'Fast onboarding',
      desc: 'Get a free offer within 48 hours and complete onboarding in days.'
    },
  ]

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3">
                {it.icon}
                <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
