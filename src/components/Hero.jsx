import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10] via-[#0b0d10] to-[#0b0d10]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-50%,rgba(99,102,241,0.35),transparent)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Now in private beta
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Let AI move your cursor and type across your desktop
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl">
            CursorPilot is an intelligent desktop agent that observes, clicks, drags, and types to complete tasks for you. It feels like magic—because it is.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-2xl bg-white text-gray-900 px-6 py-3 font-semibold shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition">
              Get early access
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-6 py-3 font-semibold backdrop-blur border border-white/15 hover:bg-white/15 transition">
              See features
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            {[
              ['15k+', 'Waitlist'],
              ['98%', 'Success rate'],
              ['500k', 'Tasks executed'],
              ['24/7', 'Autopilot'],
            ].map(([kpi, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-white">{kpi}</div>
                <div className="text-white/60 text-sm">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
