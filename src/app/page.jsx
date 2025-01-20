"use client"

import Head from 'next/head';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection'
import PriceTable from '@/components/PriceTable';
import FAQ from '@/components/FAQ';
import BlogPreview from '@/components/BlogPreview';
import FloatingCTA from '@/components/FloatingCTA';
import ComparisonTable from '@/components/ComparisonTable';
import HeroGreen from '@/components/HeroGreen';

// Dynamically import below-the-fold components
const Advantages = dynamic(() => import('@/components/Advantages'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
})

const ProductShowcase = dynamic(() => import('@/components/ProductShowcase'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
})

const Integration = dynamic(() => import('@/components/Integration'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
})

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto">
          {/* Hero Section */}
          <HeroGreen />

          {/* Dynamically loaded sections */}
          <Advantages />
          <ProductShowcase />
          <ComparisonTable />
          {/* <PriceTable /> */}
          <Integration />
          <FAQ />
          <BlogPreview />
          <FloatingCTA />
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </main>
  )
}
