"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import EmptyCart from "@/components/EmptyCart";
import OrderSummary from "@/components/OrderSummary";
import BookingForm from "@/components/BookingForm";

export default function CartPage() {
  const { items, subtotal, discount, total, discountApplies } = useCart();
  const isEmpty = items.length === 0;

  return (
    <div className="bg-white">
      <section className="border-b border-ink-900/5 bg-volt-50/60 px-4 py-12 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink-900">Your Cart</h1>
        <p className="mt-2 text-sm text-ink-500">Review your services and confirm your booking.</p>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="space-y-6">
              <OrderSummary
                items={items}
                subtotal={subtotal}
                discount={discount}
                total={total}
                discountApplies={discountApplies}
              />
            </div>

            <div className="lg:col-span-3">
              <BookingForm disabled={isEmpty} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
