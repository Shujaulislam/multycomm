// about.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>About Us | Your Business Name</title>
        <meta name="description" content="Learn more about our mission to enhance business communication using WhatsApp API solutions." />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-lg">This is the About Us page content.</p>
      </main>

      <Footer />
    </div>
  );
}