import { motion } from 'framer-motion'

export default function Hero({ onPrimaryClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm ring-1 ring-cyan-500/30">New: Flexible corporate lets with guaranteed rent</span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Rent2Rent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"> made simple</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              We partner with landlords to provide guaranteed rent and hassle‑free property management. Secure, professional and hands‑off.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 px-5 py-3 text-white font-semibold shadow-lg shadow-cyan-600/20 transition-colors">Get a free valuation</button>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 px-5 py-3 text-white font-semibold ring-1 ring-white/20">How it works</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10 p-6">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg">Guaranteed Rent</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
