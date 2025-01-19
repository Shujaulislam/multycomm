import React from 'react'

const integrations = [
    {
      name: 'E-commerce Platforms',
      description:
        'Connect with popular e-commerce platforms like Shopify, WooCommerce, and Magento to manage orders and products.',
      icon: (
        <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.5 8.5L19.5 3.5H4.5L2.5 8.5V9.5H3.5L5.5 19.5H18.5L20.5 9.5H21.5V8.5ZM5.5 4.5H18.5L20 8.5H4L5.5 4.5ZM17.5 18.5H6.5L4.8 9.5H19.2L17.5 18.5Z" />
        </svg>
      ),
    },
    {
      name: 'CRM Systems',
      description:
        'Integrate with your favorite CRM systems to maintain customer relationships and track interactions effectively.',
      icon: (
        <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4ZM12 19C8.1 19 5 15.9 5 12C5 8.1 8.1 5 12 5C15.9 5 19 8.1 19 12C19 15.9 15.9 19 12 19ZM12 8C10.3 8 9 9.3 9 11C9 11.6 9.4 12 10 12C10.6 12 11 11.6 11 11C11 10.4 11.4 10 12 10C12.6 10 13 10.4 13 11C13 11.6 12.6 12 12 12C11.4 12 11 12.4 11 13V14C11 14.6 11.4 15 12 15C12.6 15 13 14.6 13 14V13.7C14.2 13.4 15 12.3 15 11C15 9.3 13.7 8 12 8ZM12 16C11.4 16 11 16.4 11 17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17C13 16.4 12.6 16 12 16Z" />
        </svg>
      ),
    },
    {
      name: 'Business Tools',
      description:
        'Connect with your essential business tools like accounting software, analytics platforms, and automation services.',
      icon: (
        <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 7H3C2.4 7 2 7.4 2 8V16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V8C22 7.4 21.6 7 21 7ZM20 15H4V9H20V15ZM6 11H8V13H6V11ZM10 11H12V13H10V11ZM14 11H16V13H14V11Z" />
        </svg>
      ),
    },
  ]

export default function Integration() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white py-5 sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-[#25D366]">Seamless Integration</h2>
        <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Connect with Your Favorite Tools
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our platform integrates seamlessly with popular e-commerce platforms, CRM systems, and business tools.
          Automate your workflow and focus on growing your business.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                {integration.icon}
                {integration.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{integration.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  )
};