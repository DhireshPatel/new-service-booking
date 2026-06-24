import { MousePointerClick, ShoppingCart, ClipboardCheck, UserCheck, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Select Service", description: "Browse categories and pick what you need." },
  { icon: ShoppingCart, title: "Add To Cart", description: "Add one or more services to your cart." },
  { icon: ClipboardCheck, title: "Submit Booking Form", description: "Share your address and preferred time slot." },
  { icon: UserCheck, title: "Technician Assigned", description: "A verified technician is matched to your job." },
  { icon: CheckCircle2, title: "Service Completed", description: "Work is completed and quality-checked." },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-ink-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-volt-400">
            How it works
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
            Booking In 5 Simple Steps
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* connecting line for large screens */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex flex-col items-start gap-3">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-volt-400 ring-1 ring-white/10">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-volt-500 text-[10px] font-bold text-ink-900">
                    {index + 1}
                  </span>
                </span>
                <h3 className="font-display text-base font-bold">{step.title}</h3>
                <p className="text-sm leading-6 text-white/60">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
