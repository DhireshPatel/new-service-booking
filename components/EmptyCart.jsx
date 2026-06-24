import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-ink-900/15 bg-white px-6 py-20 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-volt-50 text-volt-500">
        <ShoppingCart className="h-9 w-9" />
      </span>
      <h2 className="mt-6 font-display text-xl font-bold text-ink-900">Your cart is empty</h2>
      <p className="mt-2 max-w-sm text-sm text-ink-500">
        Looks like you haven't added any services yet. Browse our catalog to get started.
      </p>
      <Link
        href="/services"
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Continue Shopping
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
