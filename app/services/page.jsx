import { categories, getServicesByCategory } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | SparkPro Electricians",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="circuit-bg border-b border-ink-900/5 bg-volt-50/60 px-4 py-14 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-volt-600">
          Catalog
        </span>
        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          All Electrician Services
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-500">
          Transparent, flat pricing on every service. Add what you need to the
          cart and book in one go.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {categories.map((category) => {
          const categoryServices = getServicesByCategory(category.slug);
          const Icon = category.icon;
          return (
            <section
              key={category.slug}
              id={category.slug}
              className="mb-16 scroll-mt-24"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wire-50 text-wire-600">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink-900">
                    {category.name}
                  </h2>
                  <p className="text-sm text-ink-500">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
