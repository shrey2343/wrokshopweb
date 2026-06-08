import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { VideoAccessProvider } from "@/context/VideoAccessContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "What's Next After Your Doctorate? | Dr. Bhawna Nigam",
  description:
    "A Roadmap to Academia, Consultancy & Entrepreneurship for DBA/PhD graduates. Led by Dr. Bhawna Nigam — Founder of Research Mentor Clinic.",
  openGraph: {
    title: "What's Next After Your Doctorate?",
    description: "Discover the 3 proven roads to life after your doctorate.",
    // TODO: add OG image for social sharing
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <VideoAccessProvider>{children}</VideoAccessProvider>
      </body>
    </html>
  );
}
