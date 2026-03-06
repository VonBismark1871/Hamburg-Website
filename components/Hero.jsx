import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="section-container section-spacing pt-20 sm:pt-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="inline-flex rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-accent"
          >
            Freelance Web Developer · Hamburg
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-slateBlue sm:text-5xl"
          >
            Modern websites for Hamburg businesses
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-slate-600"
          >
            Fast, mobile-first websites that help local businesses attract more customers.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              Get a free demo website
            </a>
            <a
              href="#portfolio"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slateBlue transition hover:border-accent hover:text-accent"
            >
              View examples
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card bg-gradient-to-br from-white to-slate-50"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Results-focused web design</h2>
            <p className="text-slate-600">
              I build clear, conversion-friendly websites tailored to restaurants, shops, and local service providers.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>✓ Fast loading pages</li>
              <li>✓ Responsive across all devices</li>
              <li>✓ Built for local visibility</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
