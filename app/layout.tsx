import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uniquepupil.in"),
  title: "Parikshit Bhardwaj | Full-Stack Developer",
  description:
    "Full-stack portfolio for Parikshit Bhardwaj featuring web, mobile, and machine learning work.",
  openGraph: {
    title: "Parikshit Bhardwaj | Full-Stack Developer",
    description:
      "Portfolio for Parikshit Bhardwaj with experience, projects, and contact details.",
    url: "https://uniquepupil.in",
    siteName: "Parikshit Bhardwaj Portfolio",
    images: [
      {
        url: "/assets/images/hi%20(1).svg",
        width: 1200,
        height: 630,
        alt: "Parikshit Bhardwaj"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Parikshit Bhardwaj | Full-Stack Developer",
    description:
      "Portfolio for Parikshit Bhardwaj with experience, projects, and contact details.",
    images: ["/assets/images/hi%20(1).svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
