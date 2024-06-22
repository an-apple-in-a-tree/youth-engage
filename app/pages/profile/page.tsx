import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { useState } from "react";
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

import * as React from "react";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  const userId = user.id;
  let type = "organization";
  const { data: profile, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("id", userId)
    .single();

  return (
    <div
      className="h-screen w-screen p-6 flex items-center justify-center"
      style={{
        backgroundImage: "url(https://www.pixground.com/wp-content/uploads/2023/10/Fantasy-Pixel-World-AI-Generated-4K-Wallpaper.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container bg-white bg-opacity-75 rounded-xl p-8 w-1/2 mx-auto">
        {profile ? (
          <>
            <h1 className= {`${raleway.className} text-2xl my-12 font-bold text-center align-center mx-auto`}>
              Dashboard:
            </h1>
            <h2 className= {`${opensans.className} p-4 py-2 bg-blue-500 text-white w-1/3 text-sm rounded-lg`} >Account Type: {profile.type}</h2>
            <div className=" shadow-xl rounded-xl my-4">
              <div className="photo-wrapper bg-blue-500 rounded-t-xl py-2">
                <img
                  className="m-8 w-32 h-32 rounded-full mx-auto"
                  src={
                    profile.profile_picture ||
                    "https://t3.ftcdn.net/jpg/04/59/16/14/360_F_459161461_qFvS71Zajv2LLMU88cOqmMuX7p2kQJeK.jpg"
                  }
                  alt={profile.name}
                />
              </div>
              <div className="p-2 bg-blue-100 w-full rounded-b-xl">
                <h3 className="text-center text-xl text-navy font-medium leading-8">
                  {profile.name}
                </h3>
                <div className="text-center text-navy text-xs font-semibold">
                  <p>{profile.description}</p>
                </div>
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-shinyBlack font-semibold">
                        Website:
                      </td>
                      <td className="px-2 py-2">
                        <a
                          href={profile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.website}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Create Profile
            </h2>
            <p className="text-gray-500 mb-6">
              You do not have a profile yet. Please create a profile to see it.
            </p>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                  <form className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="image">Image</label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        className="h-24 border mt-1 rounded px-4 w-full bg-gray-50"
                      ></textarea>
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="type">Type</label>
                      <select
                        name="type"
                        id="type"
                        value={type}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="individual">Individual</option>
                        <option value="organization">Organization</option>
                      </select>
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        name="website"
                        id="website"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Create Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
