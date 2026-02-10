import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Navbar } from "@/components/custom/Navbar";
import { Sidebar } from "@/components/custom/Sidebar";
import { RightSidebar } from "@/components/custom/RightSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music App",
  description: "Your personal music streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cyan-500`}
        >
          <Navbar />
          <main className="flex">
            <div className="w-[20%]">
              <Sidebar />
            </div>
            <div className="w-[60%] p-3">{children}</div>
            <div className="w-[20%]">
              <RightSidebar />
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
