export const metadata = {
  title: 'About Us | Multycomm',
  description: 'Learn more about our mission to enhance business communication using WhatsApp API solutions.',
  alternates: {
    canonical: 'https://yourwebsite.com/about'
  },
  openGraph: {
    title: 'About Us | Multycomm',
    description: 'Learn more about our mission to enhance business communication using WhatsApp API solutions.',
    url: 'https://yourwebsite.com/about',
    type: 'website'
  },
  twitter: {
    title: 'About Us | Multycomm',
    description: 'Learn more about our mission to enhance business communication using WhatsApp API solutions.'
  }
}

export default function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#364c63] mb-8">About Multycomm</h1>
        <p className="text-lg mb-6">
          Multycomm is a leading provider of WhatsApp API-based messaging solutions. Our mission is to empower businesses
          with cutting-edge communication tools that enhance customer engagement and streamline operations.
        </p>
        <p className="text-lg mb-6">
          Founded in 2023, we have quickly become a trusted partner for businesses of all sizes, from startups to
          enterprise-level organizations. Our team of experts is dedicated to delivering innovative solutions that help
          our clients stay ahead in today's fast-paced digital landscape.
        </p>
        <p className="text-lg mb-6">
          At Multycomm, we believe in the power of seamless communication. Our WhatsApp API integration allows businesses
          to connect with their customers on the world's most popular messaging platform, providing personalized and
          efficient service at scale.
        </p>
        <p className="text-lg">
          Whether you're looking to automate customer support, streamline sales processes, or enhance your marketing
          efforts, Multycomm has the tools and expertise to help you succeed. Join us in shaping the future of business
          communication.
        </p>
      </div>
    </>
  );
}