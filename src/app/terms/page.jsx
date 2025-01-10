export const metadata = {
  title: 'Terms and Conditions | Multycomm',
  description: 'Read our terms and conditions to understand how we provide our WhatsApp API services.',
  alternates: {
    canonical: 'https://www.multycomm.com/terms'
  },
  openGraph: {
    title: 'Terms and Conditions | Multycomm',
    description: 'Read our terms and conditions to understand how we provide our WhatsApp API services.',
    url: 'https://www.multycomm.com/terms',
    type: 'website'
  },
  twitter: {
    title: 'Terms and Conditions | Multycomm',
    description: 'Read our terms and conditions to understand how we provide our WhatsApp API services.'
  }
}


export default function Terms() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#364c63] mb-8">Terms and Conditions</h1>
          <p className="text-lg mb-6">
            Welcome to Multycomm. By using our services, you agree to comply with and be bound by the following terms and conditions.
            Please read these carefully before using our WhatsApp API services.
          </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">1. Use of Services</h2>
          <p className="text-lg mb-6">
            You agree to use Multycomm's WhatsApp API services only for lawful purposes and in accordance with these terms and conditions.
            You are prohibited from violating or attempting to violate the security of the Service.
          </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">2. API Usage and Limitations</h2>
          <p className="text-lg mb-6">
            Your use of our API is subject to certain limitations, including but not limited to rate limits and data usage caps.
            These limitations may vary depending on your subscription plan. Exceeding these limits may result in temporary
            service interruption or additional charges.
          </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">3. Privacy and Data Protection</h2>
          <p className="text-lg mb-6">
            Multycomm is committed to protecting your privacy. We will only use your personal information in accordance with our
            Privacy Policy. By using our services, you consent to such processing and you warrant that all data provided by you is accurate.
          </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-lg mb-6">
            The Service and its original content, features, and functionality are owned by Multycomm and are protected by
            international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        <h2 className="text-2xl font-semibold text-[#364c63] mt-8 mb-4">5. Termination</h2>
          <p className="text-lg mb-6">
            We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any
            reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="text-lg mt-8">
            By using Multycomm's services, you acknowledge that you have read and understood these terms and conditions
            and agree to be bound by them.
          </p>
      </div>
    </>
  );
}