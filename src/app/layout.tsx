import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/header";
import Providers from "@/providers/Providers";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col justify-between">
            <div className="flex flex-col">
              <Header />
              <main
                className={`flex flex-col max-w-[1024px] mx-auto px-[24px] justify-start items-center`}
              >
                {children}
              </main>
            </div>

            <footer
              className={`w-full flex items-center justify-center py-3`}
              style={{ height: layoutConfig.footerHeight }}
            >
              <p>{siteConfig.description}</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
