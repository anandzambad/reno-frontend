import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renevo | Reimagine Your Space",
  description: "A simple project journey for renovation: work, payments, materials and help in one place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
