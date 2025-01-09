import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src="/logo.svg" alt="Multycomm Logo" width={150} height={40} />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              T&C
            </Link>
            <Link href="/diy" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              DIY
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

