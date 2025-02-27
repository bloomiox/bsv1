import React from 'react';
import { Instagram, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Athletes = () => {
  const athletes = [
    {
      name: 'Sofia Martinez',
      sport: 'Tennis',
      image: 'https://images.unsplash.com/photo-1560012355-acc318f978ff?auto=format&fit=crop&q=80',
      achievements: ['4x Grand Slam Champion', 'World No. 1', 'French Open Champion'],
      partnerships: ['Nike', 'Tecnifibre', 'Rolex', 'Visa'],
    },
    {
      name: 'Marcus Thompson',
      sport: 'American Football',
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80',
      achievements: ['Super Bowl MVP', '3x Pro Bowl Selection', 'NFL Offensive Player of the Year'],
      partnerships: ['Under Armour', 'Gatorade', 'Ford'],
    },
    {
      name: 'Ana Silva',
      sport: 'Volleyball',
      image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80',
      achievements: ['Olympic Gold Medalist', 'World Championship MVP', 'Nations League Champion'],
      partnerships: ['Asics', 'Mikasa', 'Red Bull'],
    },
    {
      name: 'Lucas Santos',
      sport: 'Soccer',
      image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80',
      achievements: ['FIFA World Cup Winner', 'Champions League Winner', 'Ballon d\'Or Nominee'],
      partnerships: ['Adidas', 'Emirates', 'Pepsi'],
    },
  ];

  return (
    <section id="athletes" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Elite Athletes, Exceptional Results
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We represent some of the world's most talented and influential athletes across multiple sports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-95">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{athlete.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{athlete.sport}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-white font-semibold">Achievements</span>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {athlete.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Partnerships */}
                  <div className="text-sm text-gray-300">
                    <span className="text-blue-400">Partnerships:</span>{' '}
                    {athlete.partnerships.join(' • ')}
                  </div>

                  {/* Social Link */}
                  <button className="mt-4 flex items-center text-white hover:text-blue-400 transition-colors">
                    <Instagram className="h-5 w-5 mr-2" />
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/athletes"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Athletes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Athletes;