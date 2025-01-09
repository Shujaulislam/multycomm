import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Home | Your Business Name</title>
        <meta name="description" content="Transform your business with our WhatsApp API services. Improve customer engagement and streamline messaging." />
        <meta name="keywords" content="WhatsApp API, customer engagement, messaging platform, business communication" />
        <meta property="og:title" content="Transform Your Business with WhatsApp API" />
        <meta property="og:description" content="Improve customer interactions with automated messaging and analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="/images/whatsapp-api-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transform Your Business with WhatsApp API" />
        <meta name="twitter:description" content="Improve customer interactions with automated messaging and analytics." />
        <meta name="twitter:image" content="/images/whatsapp-api-banner.jpg" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>

      <Navbar />

      {/* Main content */}
      <section className="py-12 px-4 bg-primary text-white text-center">
        <h1 className="text-4xl font-bold mb-6">Transform Your Business with WhatsApp API</h1>
        <div className="max-w-5xl mx-auto">
          {/* Carousel Placeholder */}
          <div className="h-64 bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-xl">Carousel Banner Placeholder</p>
          </div>
        </div>
      </section>

      {/* Add remaining sections */}

      <Footer />
    </div>
  );
}
