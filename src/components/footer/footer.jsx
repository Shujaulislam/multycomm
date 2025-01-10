import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaGlobeAsia } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      className="footer footer-center bg-white text-center text-black text-base-content p-4 transition-all duration-300"
    >
      <aside className="flex flex-col items-center relative w-full">
        <div className="absolute left-10 top-3">
          <Link href="/">
            <Image src="/logo.webp" alt="Multycomm Logo" width={150} height={40} priority />
          </Link>
        </div>
        <p className="mb-4">
          Copyright {new Date().getFullYear()} - All rights reserved by{" "}
          <br className="md:hidden" />{" "}
          <span className="text-black hover:text-orange-500 md:hover:text-orange-500 md:text-black">
            Multycomm
          </span>
        </p>
        <div className="flex space-x-4">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobeAsia className="text-black hover:text-indigo-800" size={24} />
          </Link>
          <Link
            href="https://in.linkedin.com/company/multycomm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black hover:text-blue-500" size={24} />
          </Link>
          <Link
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 md:hover:text-orange-500 md:text-black"
          >
            About Us
          </Link>
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 md:hover:text-orange-500 md:text-black"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/diy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 md:hover:text-orange-500 md:text-black"
          >
            DIY
          </Link>
        </div>
      </aside>
    </footer>
  )
}
