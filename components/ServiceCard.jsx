"use client";

import { Star, Plus, Zap } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/helpers";

export default function ServiceCard({ service }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(service);
    toast.success("Service Added Successfully");
  };

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-ink-900/5 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
      <div>
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-50 text-volt-600 transition-colors group-hover:bg-ink-900 group-hover:text-volt-400">
            <Zap className="h-5 w-5" />
          </span>
          <span className="flex items-center gap-1 rounded-full bg-live-50 px-2.5 py-1 text-xs font-semibold text-live-500">
            <Star className="h-3.5 w-3.5 fill-live-500 text-live-500" />
            {service.rating}
          </span>
        </div>

        <h3 className="mt-4 font-display text-base font-bold text-ink-900">{service.name}</h3>
        <p className="mt-1.5 text-sm leading-6 text-ink-500">{service.description}</p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="font-display text-lg font-extrabold text-ink-900">
          {formatPrice(service.price)}
        </span>
        <button
          onClick={handleAdd}
          className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-volt-500 hover:text-ink-900 active:scale-95"
        >
          <Plus className="h-4 w-4" />
          Add To Cart
        </button>
      </div>
    </div>
  );
}
