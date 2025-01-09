// Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">YourLogo</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-secondary">About Us</Link>
          <Link href="/terms" className="hover:text-secondary">T&C</Link>
          <Link href="/diy" className="hover:text-secondary">DIY</Link>
        </div>
      </nav>
    </header>
  );
}
