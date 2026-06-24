"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Home } from "lucide-react";

export default function BookingSuccessContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("id") || "SPK-00000";
  const name = searchParams.get("name") || "there";

  return (
    <div className="circuit-bg flex min-h-[70vh] items-center justify-center bg-volt-50/40 px-4 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-soft">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-live-50 text-live-500">
          <CheckCircle2 className="h-9 w-9" />
        </span>

        <h1 className="mt-6 font-display text-2xl font-extrabold text-ink-900">Booking Confirmed!</h1>
        <p className="mt-2 text-sm text-ink-500">
          Thanks, {name}. Your service request has been received and a technician will be assigned shortly.
        </p>

        <div className="mt-6 rounded-2xl border border-dashed border-ink-900/15 bg-volt-50 px-4 py-4">
          <p className="text-xs uppercase tracking-wide text-ink-500">Booking ID</p>
          <p className="mt-1 font-display text-xl font-bold tracking-wide text-ink-900">{bookingId}</p>
        </div>

        <Link
          href="/"
          className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
