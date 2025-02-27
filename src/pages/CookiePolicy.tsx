import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy">
      <p className="text-gray-600 mb-6">Last updated: March 15, 2024</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
        <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Analytics cookies: Help us understand how visitors use our website</li>
          <li>Preference cookies: Remember your settings and preferences</li>
          <li>Marketing cookies: Track your visits to our website and help us deliver relevant advertising</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Managing Cookies</h2>
        <p className="text-gray-700 mb-4">
          Most web browsers allow you to control cookies through their settings. You can:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>View cookies stored on your computer</li>
          <li>Allow, block, or delete cookies</li>
          <li>Set preferences for certain websites</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about our Cookie Policy, please contact us at:
          <br />
          Email: privacy@bloomsports.com
          <br />
          Phone: (555) 123-4567
        </p>
      </section>
    </PolicyLayout>
  );
};

export default CookiePolicy;