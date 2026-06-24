import { Suspense } from "react";
import BookingSuccessContent from "./BookingSuccessContent";

export const metadata = {
  title: "Booking Confirmed | SparkPro Electricians",
};

export default function BookingSuccessPage() {
  return (
    <Suspense fallback={null}>
      <BookingSuccessContent />
    </Suspense>
  );
}
