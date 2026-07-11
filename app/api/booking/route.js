import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      full_name,
      mobile,
      email,
      city,
      address,
      service_date,
      preferred_time,
      notes,
      services,
    } = body;

    // Basic Validation
    if (
      !full_name ||
      !mobile ||
      !email ||
      !city ||
      !address ||
      !service_date ||
      !preferred_time
    ) {
      return NextResponse.json(
        { error: "All required fields are mandatory." },
        { status: 400 },
      );
    }

    // Save booking in Supabase
    const { data, error } = await supabaseAdmin
      .from("bookings")
      .insert([
        {
          full_name,
          mobile,
          email,
          city,
          address,
          service_date,
          preferred_time,
          notes,
          status: "Pending",
        },
      ])
      .select();

    // Stop if database insert failed
    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const serviceList = services?.length
      ? services
          .map(
            (service, index) =>
              `${index + 1}. ${service.name}
   Qty: ${service.quantity}
   Price: ₹${service.price}`,
          )
          .join("\n\n")
      : "No services selected";

    // Telegram Message
    const message = `
📢 NEW BOOKING

👤 Name: ${full_name}

📞 Mobile: ${mobile}

📧 Email: ${email}

🏙 City: ${city}

🏠 Address:
${address}

📅 Service Date:
${service_date}

🕒 Preferred Time:
${preferred_time}

📝 Notes:
${notes || "N/A"}

🛠 Selected Services
${serviceList}

📌 Status:
Pending
`;

    // Send Telegram Notification
    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
          }),
        },
      );

      if (!telegramResponse.ok) {
        const telegramError = await telegramResponse.text();
        console.error("Telegram API Error:", telegramError);
      }
    } catch (telegramError) {
      console.error("Telegram Error:", telegramError);
    }

    return NextResponse.json({
      success: true,
      message: "Booking created successfully.",
      booking: data[0],
    });
  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
