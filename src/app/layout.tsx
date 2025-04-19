import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Tweet Toilet - The Most Fun Way to Tweet",
  description: "Tweet Toilet is a Chrome extension that turns every tweet into a satisfying flush experience. The most entertaining way to share your thoughts on Twitter!",
  keywords: "Twitter, Chrome Extension, Tweet, Social Media, Fun",
  openGraph: {
    title: "Tweet Toilet - The Most Fun Way to Tweet",
    description: "Turn every tweet into a satisfying flush experience!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
