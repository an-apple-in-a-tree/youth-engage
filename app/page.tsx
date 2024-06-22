import Link from "next/link";
import "./globals.css";
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
  return (
    <div className="">
      <div className="bg-black overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="flex items-center justify-center h-screen">
          <h5 className={`text-white text-4xl ${raleway.className}`}>Welcome to...</h5>
          </div>
        <div className="mt-40 relative">
          <div className="parallax">
            <section className="relative">
              <img
                className="w-full"
                src="https://i.redd.it/r6u7qmca73pb1.jpg"
                alt="Image"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white bg-opacity-50 bg-black p-4 px-8 text-6xl font-bold">
                  Youth Engage!
                </h1>
              </div>
            </section>
            <section className="relative">
              <div className="absolute inset-0 flex items-center justify-center py-12">
                <Link href="/login">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-24 py-2 p-4 rounded">
                    Login to get started.
                  </button>
                </Link>
              </div>
            </section>
            
            <section className="bg-blue-100 text-blue-600"></section>
          </div>
        </div>
      </div>
    </div>
  );
}
