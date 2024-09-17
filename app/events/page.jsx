"use client";

import { Calendar } from "@/components/ui/calendar";
import React from "react";
import events from "@/data/events.json"; 

export default function CalendarPage() {
  const [date, setDate] = React.useState(new Date());

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const eventDates = events.map((event) => event.date);

  const isEventDate = (currentDate) => eventDates.includes(formatDate(currentDate));

  const formatDisplayDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const selectedDateEvents = events.filter((event) => event.date === formatDate(date));

  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-x-8 h-full w-full px-4 md:px-0">
      <div className="mb-8 md:mb-0 w-full md:w-1/3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => setDate(newDate || date)}
          classNames={{
            months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            month: "space-y-4 w-full flex flex-col",
            table: "w-full h-full border-collapse space-y-1",
            head_row: "",
            row: "w-full mt-2",
            day: ({ date: day }) =>
              isEventDate(day)
                ? "relative h-8 w-8 p-0 font-normal aria-selected:opacity-100 dot-indicator"
                : "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
          }}
          components={{
            DayContent: ({ date: day }) => (
              <div className="relative">
                {day.getDate()}
                {isEventDate(day) && (
                  <div className="absolute w-1 h-1 bg-blue-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1"></div>
                )}
              </div>
            ),
          }}
        />
      </div>

      <div className="w-full md:w-2/3 rounded-md p-4 flex-shrink-0 h-full">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          Events for {formatDisplayDate(date)}
        </h1>
        {selectedDateEvents.length > 0 ? (
          <div className="overflow-auto h-full">
            {selectedDateEvents.map((event, index) => (
              <div key={index} className="mb-4 p-3">
                <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
                <h2 className="text-md sm:text-lg font-semibold">{event.where} @ {event.time}</h2>
                <p className="text-sm sm:text-base">{event.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-base">No events...</p>
        )}
      </div>
    </div>
  );
}
