export const metadata = {
  title: 'DIY | Multycomm',
  description: 'Explore our DIY solutions for leveraging WhatsApp API services for your business.',
  alternates: {
    canonical: 'https://www.multycomm.com/diy'
  },
  openGraph: {
    title: 'DIY | Multycomm',
    description: 'Explore our DIY solutions for leveraging WhatsApp API services for your business.',
    url: 'https://www.multycomm.com/diy',
    type: 'website'
  },
  twitter: {
    title: 'DIY | Multycomm',
    description: 'Explore our DIY solutions for leveraging WhatsApp API services for your business.'
  }
}


export default function DIY() {
  return (
    <>
        <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#364c63] mb-8">DIY WhatsApp API Integration</h1>
        <p className="text-lg mb-6">
          Follow our step-by-step guide to integrate WhatsApp API into your business systems. While we offer full-service
          solutions, we understand that some businesses prefer a hands-on approach. This guide will help you get started
          with a basic integration.
        </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">Step 1: Set Up Your WhatsApp Business Account</h2>
        <p className="text-lg mb-6">
          Before you can use the WhatsApp API, you need to have a WhatsApp Business Account. Visit the WhatsApp Business
          website and follow their instructions to set up your account.
        </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">Step 2: Obtain API Credentials</h2>
        <p className="text-lg mb-6">
          Once your WhatsApp Business Account is set up, you'll need to apply for API access. This process may take
          some time and require verification of your business.
        </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">Step 3: Choose a Development Environment</h2>
        <p className="text-lg mb-6">
          You can integrate the WhatsApp API using various programming languages. Choose the one you're most comfortable
          with. Popular choices include Python, Node.js, and PHP.
        </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">Step 4: Make Your First API Call</h2>
        <p className="text-lg mb-6">
          Start with a simple API call, such as sending a message. Here's a basic example using Node.js:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code className="language-javascript">
            {`const axios = require('axios');

            axios.post('https://graph.facebook.com/v12.0/YOUR_PHONE_NUMBER_ID/messages', {
              messaging_product: 'whatsapp',
              to: 'RECIPIENT_PHONE_NUMBER',
              type: 'template',
              template: {
                name: 'hello_world',
                language: { code: 'en_US' }
              }
            }, {
              headers: {
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                'Content-Type': 'application/json'
              }
            })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));`}
          </code>
        </pre>
        <p className="text-lg mt-6">
          Remember to replace 'YOUR_PHONE_NUMBER_ID', 'RECIPIENT_PHONE_NUMBER', and 'YOUR_ACCESS_TOKEN' with your actual values.
        </p>
        <p className="text-lg mt-6">
          This is just the beginning. For more advanced integrations or if you encounter any difficulties, don't hesitate
          to reach out to our support team or consider our full-service solutions.
        </p>
      </div>
    </>

  );
}
