import { useState } from 'react'

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white">Get a free valuation</h2>
          <p className="mt-2 text-slate-300">Tell us a bit about your property and we’ll be in touch shortly.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="bg-white/10 text-white placeholder-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email" className="bg-white/10 text-white placeholder-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="bg-white/10 text-white placeholder-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 md:col-span-2" />
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Property address and any details" rows="4" className="bg-white/10 text-white placeholder-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 md:col-span-2" />
            <div className="md:col-span-2 flex items-center gap-3">
              <button disabled={status==='sending'} className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 px-5 py-3 text-white font-semibold transition-colors">
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>
              {status === 'success' && <span className="text-green-400">Thanks! We’ll be in touch.</span>}
              {status === 'error' && <span className="text-red-400">Something went wrong. Please try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
