import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Athletes', href: '/athletes' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/#contact' },
  ];

  const services = [
    'Contract Negotiation',
    'Brand Development',
    'Sponsorship Acquisition',
    'Career Management',
    'Media Relations',
    'Legal Representation',
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/bloom.sports.agency/', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/bloom-sports-agency', label: 'LinkedIn' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">BLOOM</h2>
            <p className="text-gray-400 mb-8">
              Empowering athletes to reach their full potential through strategic management and brand development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/#services"
                    className="text-gray-400 hover:text-white flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get in touch with us or subscribe to our newsletter for updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bloom Sports. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
              <a href="/cookie-policy" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
