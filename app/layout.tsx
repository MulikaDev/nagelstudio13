import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nagel Studio 13. | Nagelstudio in Beverstedt",
  description:
    "Nagel Studio 13 ist ein persönliches Home Studio für professionelle Nagelpflege in Beverstedt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${montserrat.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}