import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRM Solutions | AI Powered CRM",
  description:
    "Manage leads, automate follow-ups, track appointments, and boost conversions with our AI-powered CRM platform.",

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },

  openGraph: {
    title: "CRM Solutions | AI Powered CRM",
    description:
      "Manage leads, automate follow-ups, track appointments, and boost conversions with our AI-powered CRM platform.",
    url: "https://yourdomain.com",
    siteName: "CRM Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "CRM Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CRM Solutions | AI Powered CRM",
    description:
      "Manage leads, automate follow-ups, track appointments, and boost conversions.",
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
