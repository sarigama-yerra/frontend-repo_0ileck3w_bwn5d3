export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300">
        <p>© {new Date().getFullYear()} Rent2Rent. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="/test" className="hover:text-white">System Check</a>
        </div>
      </div>
    </footer>
  )
}
