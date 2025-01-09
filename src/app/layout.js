// import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Metadata = {
  title: "Multycomm",
  description: "Multi-whatsapp messaging by Multycomm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/MultyCommLogo.ico"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/MultyCommLogo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/MultyComm.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/MultyComm.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
