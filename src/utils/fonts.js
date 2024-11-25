import { Nunito_Sans, Pacifico } from "next/font/google";


// Specific font: Nunito Sans
export const nunitoSans = Nunito_Sans({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "swap",
  });

export const pacifico = Pacifico({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });