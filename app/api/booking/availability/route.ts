import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { getAvailableSlotsForDate, bookingConfig } from "@/lib/bookingConfig";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const dateStr = searchParams.get("date");

    if (!dateStr) {
      return NextResponse.json(
        { error: "Date parameter is required" },
        { status: 400 }
      );
    }

    const date = new Date(dateStr + "T12:00:00");
    if (isNaN(date.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    // Pobierz zakres dat dla danego dnia
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const supabase = createServerClient();

    // Pobierz wszystkie rezerwacje dla danego dnia (nie anulowane)
    const { data: bookings, error } = await supabase
      .from("bookings")
      .select("datetime")
      .gte("datetime", startOfDay.toISOString())
      .lte("datetime", endOfDay.toISOString())
      .eq("cancelled", false);

    if (error) {
      console.error("Error fetching bookings:", error);
      return NextResponse.json(
        { error: "Failed to fetch availability" },
        { status: 500 }
      );
    }

    const bookedSlotsRaw = (bookings || []).map((b) => b.datetime);
    const bookedSlots = bookedSlotsRaw.map((dt) => new Date(dt));
    let availableSlots = getAvailableSlotsForDate(date, bookedSlots);

    // Ukryj sloty, które są za wcześnie (min. 2h przed rezerwacją)
    const now = new Date();
    const minTime = new Date(
      now.getTime() + bookingConfig.minHoursBeforeBooking * 60 * 60 * 1000
    );
    availableSlots = availableSlots.filter((slot) => slot > minTime);

    return NextResponse.json({
      date: dateStr,
      availableSlots: availableSlots.map((s) => s.toISOString()),
      bookedSlots: bookedSlotsRaw,
    });
  } catch (error) {
    console.error("Availability check error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

