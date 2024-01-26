import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

const poppins: NextFont = Poppins({
  weight: ["200", "400", "600"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Four Card Feature Section",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col items-center bg-veryLightGray lg:h-screen lg:justify-center`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
