import "./globals.css";
import Navbar from "../components/Navbar";
import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Youth Engage",
  description: "An online platform for youth",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {user !== null && <Navbar />}
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
