
// terms.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Terms & Conditions | Your Business Name</title>
        <meta name="description" content="Read our terms and conditions to understand how we provide our WhatsApp API services." />
        <link rel="canonical" href="https://yourwebsite.com/terms" />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-lg">This is the Terms and Conditions page content.</p>
      </main>

      <Footer />
    </div>
  );
}