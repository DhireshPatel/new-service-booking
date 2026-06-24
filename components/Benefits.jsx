import { CalendarClock, UserCheck, ReceiptText, Award, Headset } from "lucide-react";

const benefits = [
  { icon: CalendarClock, title: "Same Day Service", description: "Most jobs booked before noon are completed the same day." },
  { icon: UserCheck, title: "Verified Technicians", description: "ID-checked and skill-tested before they join the platform." },
  { icon: ReceiptText, title: "Transparent Pricing", description: "Fixed prices shown upfront, no negotiation needed." },
  { icon: Award, title: "Quality Work", description: "Workmanship checked against a standard service checklist." },
  { icon: Headset, title: "Customer Support", description: "Responsive support before, during and after every booking." },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-volt-600">
          Why customers stay
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink-900">
          Customer Benefits
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="rounded-2xl border border-ink-900/5 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-live-50 text-live-500">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-sm font-bold text-ink-900">{benefit.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-ink-500">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
