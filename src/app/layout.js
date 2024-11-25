import { Manrope } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";

// Global font: Manrope
const manrope = Manrope({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "We 5ive",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <div className="w-full lg:w-[1440px] mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
