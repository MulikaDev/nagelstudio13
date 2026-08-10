import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nagel Studio · 13 | Nagelstudio in Beverstedt",
    template: "%s | Nagel Studio · 13",
  },

  description:
    "Professionelle Maniküre, Shellac, Modellage und Pediküre in Beverstedt. Individuelle Nagelpflege in stilvoller Atmosphäre. Jetzt Termin vereinbaren.",

  keywords: [
    "Nagelstudio Beverstedt",
    "Nageldesign Beverstedt",
    "Maniküre Beverstedt",
    "Pediküre Beverstedt",
    "Shellac Beverstedt",
    "Modellage",
    "Gelnägel",
    "Nagelpflege",
    "Nagel Studio 13",
  ],

  authors: [
    {
      name: "Nagel Studio · 13",
    },
  ],

  creator: "Nagel Studio · 13",

  publisher: "Nagel Studio · 13",

  applicationName: "Nagel Studio · 13",

  category: "Beauty",

  openGraph: {
    images: ["/opengraph-image"],
  },

  twitter: {
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
