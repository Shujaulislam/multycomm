'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: "5 Ways to Boost Customer Engagement with WhatsApp Marketing",
    excerpt: "Learn how to leverage WhatsApp's features to increase customer interaction and loyalty.",
    image: "/images/blog-1.jpg",
    date: "May 15, 2023",
    author: "Jane Doe"
  },
  {
    title: "The Future of WhatsApp Business API: Trends to Watch",
    excerpt: "Discover the upcoming trends that will shape the future of WhatsApp Business API and how to prepare for them.",
    image: "/images/blog-2.jpg",
    date: "May 22, 2023",
    author: "John Smith"
  },
  {
    title: "Case Study: How Company X Increased Sales by 40% Using Multy Messaging Platform",
    excerpt: "An in-depth look at how a real business achieved remarkable results with our WhatsApp marketing solution.",
    image: "/images/blog-3.jpg",
    date: "May 29, 2023",
    author: "Alice Johnson"
  }
]

export default function BlogPreview() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <Link href="#" className="mt-4 inline-block text-blue-600 hover:underline">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="#"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

