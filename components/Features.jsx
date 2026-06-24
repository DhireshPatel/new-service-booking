import { BadgeCheck, Clock, IndianRupee, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Certified Electricians",
    description: "Every technician is licensed, background-checked and trained.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Most bookings are assigned a technician within the hour.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Flat, upfront prices with no surprise call-out fees.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Service",
    description: "Insured work, quality parts and safety-first practices.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt-50 text-volt-600 transition-colors group-hover:bg-ink-900 group-hover:text-volt-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-ink-500">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
