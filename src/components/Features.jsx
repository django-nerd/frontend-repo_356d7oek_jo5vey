import { motion } from 'framer-motion'
import { MousePointerClick, Keyboard, Shield, Zap, Sparkles } from 'lucide-react'

const features = [
  {
    icon: MousePointerClick,
    title: 'Autonomous cursor control',
    desc: 'Clicks, drags, scrolls, and selects with human-like precision across any app.'
  },
  {
    icon: Keyboard,
    title: 'Fluent typing',
    desc: 'Types, edits, and formats text with accuracy using your OS keyboard layout.'
  },
  {
    icon: Zap,
    title: 'Task automation',
    desc: 'Chain steps together: open apps, navigate menus, fill forms, and more.'
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    desc: 'Runs locally with fine-grained controls for what the agent can see and do.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#0b0d10]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(168,85,247,0.18),transparent),radial-gradient(900px_400px_at_90%_0%,rgba(34,197,94,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-bold text-white text-center">
          Built for real desktop work
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-white/70 text-lg text-center max-w-2xl mx-auto">
          A playful, interactive assistant that takes on repetitive tasks so you can focus on what matters.
        </motion.p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur hover:bg-white/10 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-900">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold">Human-in-the-loop controls</h4>
              <p className="text-white/70">Approve steps, set guardrails, and watch the agent execute with confidence. Pause anytime with a single key.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
