"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="circuit-bg relative overflow-hidden bg-linear-to-b from-volt-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-volt-400">
            <Zap className="h-3.5 w-3.5" /> Trusted by 12,000+ homes
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Professional Electrician Services{" "}
            <span className="relative inline-block text-volt-500">
              At Your Doorstep
              <span className="volt-divider absolute -bottom-2 left-0 right-0" />
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-ink-500">
            Book certified, background-verified electricians for repairs,
            installations and inspections — with transparent pricing and
            same-day availability across your city.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-volt-400 hover:bg-volt-50"
            >
              View Services
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-ink-500">
            <ShieldCheck className="h-4 w-4 text-live-500" />
            Verified technicians · Transparent pricing · No hidden charges
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-4xl bg-ink-900/5" />
          <div className="absolute inset-4 flex items-center justify-center rounded-[1.75rem] bg-ink-900 shadow-soft">
            <Zap
              className="h-28 w-28 text-volt-400 animate-spark"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute -right-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft">
            <span className="h-2 w-2 rounded-full bg-live-500" />
            <span className="text-xs font-semibold text-ink-900">
              Technician on the way
            </span>
          </div>
          <div className="absolute -left-4 bottom-8 rounded-2xl bg-white px-4 py-3 shadow-soft">
            <p className="text-xs text-ink-500">Avg. response time</p>
            <p className="font-display text-lg font-bold text-ink-900">
              28 mins
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
