import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceCategories from "@/components/ServiceCategories";
import ProcessTimeline from "@/components/ProcessTimeline";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ServiceCategories />
      <ProcessTimeline />
      <Benefits />
      <Testimonials />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-ink-900 px-8 py-10 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Need an electrician today?
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Browse services and get a technician booked in minutes.
            </p>
          </div>
          <Link
            href="/services"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-volt-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
          >
            Book Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
