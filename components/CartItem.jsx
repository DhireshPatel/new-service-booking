"use client";

import { Minus, Plus, Trash2, Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/helpers";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-900/5 bg-white p-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-volt-50 text-volt-600">
          <Zap className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-sm font-bold text-ink-900">{item.name}</h3>
          <p className="text-xs text-ink-500">{formatPrice(item.price)} / service</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        {/* Quantity controls */}
        <div className="flex items-center gap-3 rounded-full border border-ink-900/10 px-2 py-1">
          <button
            aria-label="Decrease quantity"
            onClick={() => decreaseQty(item.id)}
            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-900/5"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-5 text-center text-sm font-semibold text-ink-900">{item.quantity}</span>
          <button
            aria-label="Increase quantity"
            onClick={() => increaseQty(item.id)}
            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-900/5"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Subtotal */}
        <span className="w-20 text-right font-display text-sm font-bold text-ink-900">
          {formatPrice(item.price * item.quantity)}
        </span>

        {/* Remove */}
        <button
          aria-label="Remove item"
          onClick={() => removeItem(item.id)}
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
