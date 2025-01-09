// diy.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DIY() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>DIY | Your Business Name</title>
        <meta name="description" content="Explore our DIY solutions for leveraging WhatsApp API services for your business." />
        <link rel="canonical" href="https://yourwebsite.com/diy" />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">DIY</h1>
        <p className="text-lg">This is the DIY page content.</p>
      </main>

      <Footer />
    </div>
  );
}
