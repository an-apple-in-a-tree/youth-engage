import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import AuthButton from "@/components/AuthButton";
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



export default function Navbar() {
  return (
    <NavigationMenu.Root className={`flex justify-center ${nunito.className}`}>
      <NavigationMenu.List
        className={`text-xl playwrite flex py-4 gap-8 ${nunito.className}`}
      >
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/pages/browse" className="hover:underline">
            Browse
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/pages/upload" className="hover:underline">
            Upload
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/pages/profile"
            className="hover:underline"
          >
            Profile
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <AuthButton />
    </NavigationMenu.Root>
  );
}
