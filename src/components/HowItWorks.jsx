import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Describe your task',
    desc: 'Tell the agent what you want to achieve. Natural language, no scripts required.'
  },
  {
    title: 'Approve the plan',
    desc: 'Review the steps the agent proposes. Add constraints and confirmations.'
  },
  {
    title: 'Watch it work',
    desc: 'See the cursor move, windows switch, and text appear as the agent completes your task.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 bg-[#0b0d10]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-bold text-white text-center">
          How it works
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-white/70 text-lg text-center max-w-2xl mx-auto">
          From idea to execution in seconds.
        </motion.p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
              <div className="text-sm text-white/60">Step {i + 1}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
