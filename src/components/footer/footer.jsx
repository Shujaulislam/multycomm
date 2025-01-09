// Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-bold">YourLogo</div>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-secondary">About Us</Link>
          <Link href="/terms" className="hover:text-secondary">T&C</Link>
          <Link href="/diy" className="hover:text-secondary">DIY</Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="hover:text-secondary">Twitter</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-secondary">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}