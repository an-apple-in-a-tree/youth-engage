"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import EventCard from "@/components/EventCard";

export default function Page() {
  const supabase = createClient();
  const [error, setError] = useState<null | string>(null);
  const [events, setEvents] = useState<any[] | null>(null);
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        setEvents(null);
        setError(error.message);
        console.log(error);
      }
      if (data) {
        setEvents(data);
        setError(null);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <section className="relative">
              <img
                className="w-full"
                src="https://images3.alphacoders.com/133/1332803.png"
                alt="Image"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white  p-4 px-8 text-6xl font-bold">
                  Browse Events
                </h1>
              </div>
            </section>
      {events && (
        <div className="grid grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard key={event.event_name} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
