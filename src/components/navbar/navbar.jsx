'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white text-[#364c63] shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className='relative'>
              <Image 
                src="/logo.webp" 
                alt="Multycomm Logo" 
                style={{ mixBlendMode:'inherit' }} 
                width={150} 
                height={40}
                priority
                loading="eager"
                quality={90}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-lg font-medium">
            <Link href="/" className="hover:text-[#25D366] transition-colors px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#25D366] transition-colors px-3 py-2 rounded-md">
              About Us
            </Link>
            <Link href="/pricing" className="hover:text-[#25D366] transition-colors px-3 py-2 rounded-md">
              Pricing
            </Link>
            <Link href="/terms" className="hover:text-[#25D366] transition-colors px-3 py-2 rounded-md">
              T&C
            </Link>
            <Link href="/diy" className="hover:text-[#25D366] transition-colors px-3 py-2 rounded-md">
              DIY
            </Link>
            <Link 
              href="#get-started" 
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#25D366] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#25D366] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#25D366] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/terms" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#25D366] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                T&C
              </Link>
              <Link 
                href="/diy" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#25D366] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                DIY
              </Link>
              <Link 
                href="#get-started" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
