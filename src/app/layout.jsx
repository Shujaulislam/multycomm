import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Multycomm - WhatsApp API Solutions',
  description: 'Empower your business with WhatsApp API. Automate customer engagement and scale communication effortlessly.',
  openGraph: {
    title: 'Multycomm - WhatsApp API Solutions',
    description: 'Empower your business with WhatsApp API. Automate customer engagement and scale communication effortlessly.',
    url: 'https://www.multycomm.com',
    siteName: 'Multycomm',
    images: [
      {
        url: 'https://www.multycomm.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multycomm - WhatsApp API Solutions',
    description: 'Empower your business with WhatsApp API. Automate customer engagement and scale communication effortlessly.',
    images: ['https://www.multycomm.com/twitter-image.jpg'],
  },
}

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
