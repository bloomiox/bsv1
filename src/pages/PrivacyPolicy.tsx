import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <p className="text-gray-600 mb-6">Last updated: March 15, 2024</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          At Bloom Sports ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
        <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Contact information (name, email address, phone number)</li>
          <li>Professional information (sports, achievements, career history)</li>
          <li>Communication preferences</li>
          <li>Any other information you choose to provide</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Communicate with you about our services</li>
          <li>Respond to your requests and inquiries</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@bloomsports.com
          <br />
          Phone: (555) 123-4567
        </p>
      </section>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;