import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import ContactForm from './ContactForm';

interface OfficeLocation {
  country: string;
  email: string;
  phone: string;
  address: string[];
  timezone: string;
}

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Switzerland');

  const locations: Record<string, OfficeLocation> = {
    Switzerland: {
      country: 'Switzerland',
      email: 'hello@bloom-sports.com',
      phone: '+41 77 588 16 42',
      address: ['Pestalozzistr. 21', '9400 Rorschach', 'Schweiz'],
      timezone: 'CET',
    },
    USA: {
      country: 'USA',
      email: 'hello@bloom-sports.com',
      phone: '+1 205 891-9321',
      address: ['150 S Pine Island Rd', 'Suite #300', 'FL 33324', 'US'],
      timezone: 'EST',
    },
    Bosnia: {
      country: 'Bosnia',
      email: 'hello@bloom-sports.com',
      phone: '+387 33 922-622',
      address: ['Maglajska 1', '71000 Sarajevo', 'BiH'],
      timezone: 'CET',
    },
  };

  const currentLocation = locations[selectedLocation];

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Ready to take your career to the next level? Our team of experts is here to help you achieve your goals.
            </p>
            
            {/* Location Switcher */}
            <div className="flex space-x-4 mb-12">
              {Object.keys(locations).map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedLocation === location
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {location}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Call Us</h3>
                  <p className="text-gray-400">{currentLocation.phone}</p>
                  <p className="text-gray-400">Monday - Friday, 9am - 6pm {currentLocation.timezone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Email Us</h3>
                  <p className="text-gray-400">{currentLocation.email}</p>
                  <p className="text-gray-400">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                  {currentLocation.address.map((line, index) => (
                    <p key={index} className="text-gray-400">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;