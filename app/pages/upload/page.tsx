"use client";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  Lato,
  Montserrat,
  Noto_Sans,
  Nunito_Sans,
  Open_Sans,
  Poppins,
  Raleway,
  Roboto,
} from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const noto = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

const opensans = Open_Sans({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default async function Page() {
  const supabase = createClient();
  const [eventName, setEventName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleSubmit (){
    console.log("Submitted.");
  }


  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp12238854.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-xl w-full space-y-8 bg-white bg-opacity-75 p-6 rounded-lg">
        <h5 className={`text-3xl font-semibold ${raleway.className}`}>
          Create a New Event
        </h5>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="eventName" className="sr-only">
                Event Name
              </label>
              <input
                id="eventName"
                name="eventName"
                type="text"
                autoComplete="eventName"
                required
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Event Name"
              />
            </div>
            <div>
              <label htmlFor="shortDescription" className="sr-only">
                Short Description
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                rows={3}
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Short Description"
              />
            </div>
            <div>
              <label htmlFor="eventLink" className="sr-only">
                Event Link
              </label>
              <input
                id="eventLink"
                name="eventLink"
                type="url"
                autoComplete="url"
                value={eventLink}
                onChange={(e) => setEventLink(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Event Link"
              />
            </div>
            <div>
              <label htmlFor="hashtags" className="sr-only">
                Hashtags (comma separated)
              </label>
              <input
                id="hashtags"
                name="hashtags"
                type="text"
                autoComplete="hashtags"
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Hashtags (comma separated)"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className="sr-only">
                  Start Date
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  autoComplete="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="sr-only">
                  End Date
                </label>
                <input
                  id="endDate"
                  name="endDate"
                  type="date"
                  autoComplete="endDate"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: lock-closed */}
              </span>
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};


