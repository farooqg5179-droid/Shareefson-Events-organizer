import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shareef Sons Events Organizer",
  description:
    "Professional Event Management, Wedding Decoration, Catering, Brand Activation, Exhibition and Stall Fabrication in Faisalabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
