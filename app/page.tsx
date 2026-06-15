import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "CRM Solutions | AI Powered CRM for Lead Management & Automation",
  description:
    "Manage leads, automate follow-ups, track appointments, and boost conversions with our AI-powered CRM platform.",
};

export default function Page() {
  return <HomeClient />;
}