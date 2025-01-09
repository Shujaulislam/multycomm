import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.svg" alt="Multycomm Logo" width={150} height={40} />
            </Link>
          </div>
          <div className="flex mt-4 md:mt-0">
            <Link href="/about" className="text-gray-600 hover:text-gray-900 mx-3">
              About Us
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900 mx-3">
              T&C
            </Link>
            <Link href="/diy" className="text-gray-600 hover:text-gray-900 mx-3">
              DIY
            </Link>
          </div>
          <div className="flex mt-4 md:mt-0">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  )
}

