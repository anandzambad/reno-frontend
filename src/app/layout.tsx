import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reno | Service Marketplace",
  description: "Manage leads, contractors, estimates and work orders in one place."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
