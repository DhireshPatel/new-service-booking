// Shared formatting and calculation helpers used across the app.

export function formatPrice(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

export const DISCOUNT_THRESHOLD = 3;
export const DISCOUNT_RATE = 0.1;

export function calculateTotals(items) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const discountApplies = totalQuantity >= DISCOUNT_THRESHOLD;
  const discount = discountApplies ? Math.round(subtotal * DISCOUNT_RATE) : 0;
  const total = subtotal - discount;

  return { subtotal, discount, total, discountApplies };
}

export function generateBookingId() {
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  const timestamp = Date.now().toString().slice(-4);
  return `SPK-${timestamp}${random}`;
}
