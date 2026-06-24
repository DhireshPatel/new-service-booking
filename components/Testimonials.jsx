import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-volt-50/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-volt-600">
            Customer voices
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-card"
            >
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < testimonial.rating
                          ? "fill-volt-500 text-volt-500"
                          : "fill-ink-900/10 text-ink-900/10"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-ink-700">"{testimonial.review}"</p>
              </div>
              <div className="mt-5">
                <p className="font-display text-sm font-bold text-ink-900">{testimonial.name}</p>
                <p className="text-xs text-ink-500">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
