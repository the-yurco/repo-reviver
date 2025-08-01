import type { Metadata } from "next";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/providers";
import SignedInNavbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repo Reviver",
  description: "Created by developer Juraj Bpsy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <>
              <SignedIn>
                <SignedInNavbar />
              </SignedIn>
            </>
            <main className="h-full w-full flex justify-center items-center bg-foreground dark:bg-background">
              {children}
            </main>
          </body>
        </html>
      </ClerkProvider>
    </Providers>
  );
}
