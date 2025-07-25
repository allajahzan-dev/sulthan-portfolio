import { Urbanist } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});