import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service">
      <p className="text-gray-600 mb-6">Last updated: March 15, 2024</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
        <p className="text-gray-700 mb-4">
          By accessing or using Bloom Sports' services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
        <p className="text-gray-700 mb-4">
          Bloom Sports provides sports management and representation services, including but not limited to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Contract negotiation</li>
          <li>Brand development</li>
          <li>Sponsorship acquisition</li>
          <li>Career management</li>
          <li>Media relations</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content, features, and functionality of our services are owned by Bloom Sports and are protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          Bloom Sports shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
        </p>
      </section>
    </PolicyLayout>
  );
};

export default TermsOfService;