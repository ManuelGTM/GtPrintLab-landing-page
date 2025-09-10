import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gt Print Lab - Professional 3D Printing & CAD Design Services",
  description:
    "Expert 3D printing and CAD design services. From rapid prototyping to custom manufacturing solutions. Professional quality, fast turnaround, competitive pricing.",
  keywords:
    "3D printing, CAD design, prototyping, manufacturing, custom parts, product design, engineering services",
  authors: [{ name: "Gt Print Lab" }],
  creator: "Gt Print Lab",
  publisher: "Gt Print Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gtprintlab.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gt Print Lab - Professional 3D Printing & CAD Design Services",
    description:
      "Expert 3D printing and CAD design services. From rapid prototyping to custom manufacturing solutions.",
    url: "https://gtprintlab.com",
    siteName: "Gt Print Lab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gt Print Lab - 3D Printing and CAD Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gt Print Lab - Professional 3D Printing & CAD Design Services",
    description:
      "Expert 3D printing and CAD design services. From rapid prototyping to custom manufacturing solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen bg-background">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
