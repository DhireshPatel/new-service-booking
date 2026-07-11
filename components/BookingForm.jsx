"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import { generateBookingId } from "@/utils/helpers";

const initialValues = {
  fullName: "",
  mobile: "",
  email: "",
  address: "",
  city: "",
  serviceDate: "",
  preferredTime: "",
  notes: "",
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";

  if (!values.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!/^[6-9]\d{9}$/.test(values.mobile.trim())) {
    errors.mobile = "Enter a valid 10-digit mobile number.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.address.trim()) errors.address = "Address is required.";
  if (!values.city.trim()) errors.city = "City is required.";

  if (!values.serviceDate) {
    errors.serviceDate = "Please select a service date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(values.serviceDate) < today) {
      errors.serviceDate = "Service date cannot be in the past.";
    }
  }

  if (!values.preferredTime)
    errors.preferredTime = "Please select a preferred time slot.";

  return errors;
}

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
];

export default function BookingForm({ disabled }) {
  const router = useRouter();
  // const { clearCart } = useCart();
  const { items, total, clearCart } = useCart();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (disabled) {
      toast.error("Add at least one service before booking.");
      return;
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: values.fullName,
          mobile: values.mobile,
          email: values.email,
          city: values.city,
          address: values.address,
          service_date: values.serviceDate,
          preferred_time: values.preferredTime,
          notes: values.notes,

          services: items,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Booking failed");
      }

      toast.success("Booking Confirmed!");

      const bookingId = generateBookingId();

      clearCart();

      router.push(
        `/booking-success?id=${bookingId}&name=${encodeURIComponent(values.fullName)}`,
      );
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `focus-ring w-full rounded-xl border px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors ${
      errors[field]
        ? "border-red-400 bg-red-50/40"
        : "border-ink-900/10 bg-white focus:border-volt-400"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card"
    >
      <h3 className="font-display text-base font-bold text-ink-900">
        Booking Details
      </h3>
      <p className="mt-1 text-sm text-ink-500">
        Tell us where and when to send the technician.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            Full Name
          </label>
          <input
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="e.g. Priya Mehta"
            className={inputClass("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            Mobile Number
          </label>
          <input
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            inputMode="numeric"
            maxLength={10}
            className={inputClass("mobile")}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            City
          </label>
          <input
            name="city"
            value={values.city}
            onChange={handleChange}
            placeholder="e.g. Jodhpur"
            className={inputClass("city")}
          />
          {errors.city && (
            <p className="mt-1 text-xs text-red-500">{errors.city}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            Address
          </label>
          <input
            name="address"
            value={values.address}
            onChange={handleChange}
            placeholder="House no., street, landmark"
            className={inputClass("address")}
          />
          {errors.address && (
            <p className="mt-1 text-xs text-red-500">{errors.address}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            Service Date
          </label>
          <input
            name="serviceDate"
            type="date"
            value={values.serviceDate}
            onChange={handleChange}
            className={inputClass("serviceDate")}
          />
          {errors.serviceDate && (
            <p className="mt-1 text-xs text-red-500">{errors.serviceDate}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            Preferred Time
          </label>
          <select
            name="preferredTime"
            value={values.preferredTime}
            onChange={handleChange}
            className={inputClass("preferredTime")}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-xs text-red-500">{errors.preferredTime}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold text-ink-700">
            Additional Notes (optional)
          </label>
          <textarea
            name="notes"
            value={values.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Anything the technician should know in advance"
            className={inputClass("notes")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-volt-500 hover:text-ink-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Confirming Booking..." : "Confirm Booking"}
      </button>
    </form>
  );
}
