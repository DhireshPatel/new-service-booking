import { Target, Eye, ShieldCheck, Clock, Award, Users } from "lucide-react";

export const metadata = {
  title: "About Us | SparkPro Electricians",
};

const stats = [
  { label: "Services Completed", value: "48,000+" },
  { label: "Happy Customers", value: "12,500+" },
  { label: "Years Experience", value: "9+" },
];

const whyChooseUs = [
  { icon: ShieldCheck, title: "Verified & Insured", description: "Every technician is background-checked and insured for your peace of mind." },
  { icon: Clock, title: "On-Time, Every Time", description: "We respect your schedule with punctual arrivals and clear time slots." },
  { icon: Award, title: "Quality Guaranteed", description: "Work is checked against a standard checklist before we call the job done." },
];

const team = [
  { name: "Vikram Rathore", role: "Founder & Master Electrician", initials: "VR" },
  { name: "Sunita Joshi", role: "Head of Operations", initials: "SJ" },
  { name: "Arjun Nair", role: "Lead Field Technician", initials: "AN" },
  { name: "Priya Desai", role: "Customer Success Lead", initials: "PD" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="circuit-bg border-b border-ink-900/5 bg-volt-50/60 px-4 py-16 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-volt-600">
          About SparkPro
        </span>
        <h1 className="mx-auto mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Powering Homes With Trust, One Service At A Time
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-500">
          We connect verified electricians with homeowners who want reliable, affordable and
          transparent electrical work.
        </p>
      </section>

      {/* Story / Mission / Vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">Our Story</h2>
            <p className="mt-3 text-sm leading-7 text-ink-500">
              SparkPro started in a small workshop with three electricians and a shared frustration:
              finding a trustworthy electrician shouldn't be a gamble. We built a platform where every
              technician is vetted, every price is fixed upfront, and every booking is tracked from
              start to finish.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-900/5 bg-volt-50/40 p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-volt-400">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-ink-900">Our Mission</h3>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              Make professional electrical help accessible, affordable and dependable for every household.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-900/5 bg-wire-50/60 p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-volt-400">
              <Eye className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-ink-900">Our Vision</h3>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              To become the most trusted name in home electrical services across India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-900 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10">
              <p className="font-display text-3xl font-extrabold text-volt-400">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight text-ink-900">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt-50 text-volt-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="bg-volt-50/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Users className="h-5 w-5 text-volt-600" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900">
              Meet The Team
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white p-6 text-center shadow-card">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink-900 font-display text-lg font-bold text-volt-400">
                  {member.initials}
                </span>
                <h3 className="mt-4 font-display text-sm font-bold text-ink-900">{member.name}</h3>
                <p className="mt-1 text-xs text-ink-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
