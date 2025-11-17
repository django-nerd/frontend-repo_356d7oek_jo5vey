import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-[#0b0d10]">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 text-center text-white backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative text-3xl sm:text-4xl font-bold">
            Join the beta and put your desktop on autopilot
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="relative mt-3 text-white/80 max-w-2xl mx-auto">
            Early access includes session replays, granular permissions, and priority support.
          </motion.p>

          <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="relative mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" required placeholder="you@company.com" className="w-full sm:w-96 rounded-xl bg-white text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none" />
            <button type="submit" className="rounded-xl bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-black transition">
              Join waitlist
            </button>
          </motion.form>

          <div className="relative mt-4 text-sm text-white/60">
            No spam. Unsubscribe anytime.
          </div>
        </div>
      </div>
    </section>
  )
}
