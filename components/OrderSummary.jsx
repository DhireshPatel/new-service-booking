import { formatPrice } from "@/utils/helpers";
import { TicketPercent } from "lucide-react";

export default function OrderSummary({ items, subtotal, discount, total, discountApplies }) {
  return (
    <div className="rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card">
      <h3 className="font-display text-base font-bold text-ink-900">Order Summary</h3>

      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between text-sm">
            <span className="text-ink-700">
              {item.name} <span className="text-ink-500">× {item.quantity}</span>
            </span>
            <span className="font-medium text-ink-900">{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 space-y-2 border-t border-ink-900/5 pt-4 text-sm">
        <div className="flex items-center justify-between text-ink-500">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        {discountApplies && (
          <div className="flex items-center justify-between text-live-500">
            <span className="flex items-center gap-1.5">
              <TicketPercent className="h-4 w-4" />
              Discount (10%)
            </span>
            <span>- {formatPrice(discount)}</span>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-ink-900/5 pt-3 font-display text-base font-bold text-ink-900">
          <span>Grand Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {!discountApplies && (
        <p className="mt-4 rounded-lg bg-volt-50 px-3 py-2 text-xs text-volt-600">
          Add {Math.max(0, 3 - items.reduce((sum, item) => sum + item.quantity, 0))} more service(s) to unlock a 10% discount.
        </p>
      )}
    </div>
  );
}
