import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  const formRef = useRef(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative">
        <Hero onPrimaryClick={scrollToForm} />
        <Features />
        <div ref={formRef}>
          <LeadForm />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
