import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgroNusa Store Enterprise",
  description: "Marketplace agrikultur premium untuk obat tani, pupuk, benih, alat, konsultasi, dan manajemen distributor.",
  keywords: ["obat tani", "pupuk", "benih", "marketplace agrikultur", "AgroNusa"],
  openGraph: {
    title: "AgroNusa Store Enterprise",
    description: "Solusi marketplace, ERP-lite, CRM, inventori, dan analytics agrikultur.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
