import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Manager | UX Design & Innovation",
  description: "Senior Product Manager specializing in user experience design, product strategy, and innovative solutions. Sharing insights on product management, industry trends, and best practices.",
  keywords: "product manager, product management, user experience, product strategy, innovation, project management, agile development",
  openGraph: {
    title: "Product Manager | UX Design & Innovation",
    description: "Senior Product Manager specializing in user experience design, product strategy, and innovative solutions. Sharing insights on product management, industry trends, and best practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
