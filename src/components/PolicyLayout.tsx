import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <a
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </a>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;