import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/services";

export default function ServiceCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-volt-600">
          What we fix
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink-900">
          Service Categories
        </h2>
        <p className="mt-3 text-ink-500">
          Pick a category to see every service, with upfront pricing and ratings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.slug}
              className="flex flex-col justify-between rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-wire-50 text-wire-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {category.name}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-500">{category.description}</p>
              </div>
              <Link
                href={`/services#${category.slug}`}
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors hover:text-volt-600"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
