import React, { useEffect, useState } from 'react';
import { Trophy, Instagram, Star, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Athlete {
  name: string;
  sport: string;
  category: string;
  nationality: string;
  image: string;
  achievements: string[];
  rankings: string[];
  partnerships: string[];
  socialMedia: {
    followers: string;
    handle: string;
  };
}

const athletes: Athlete[] = [
  {
    name: 'Sofia Martinez',
    sport: 'Tennis',
    category: "Women's Singles",
    nationality: 'Poland',
    achievements: [
      'Polish Open Finalist',
      'Challenger Series Winner'
    ],
    rankings: [
      'Current WTA Ranking: #185',
      'Career-High: #150'
    ],
    partnerships: ['Local Tennis Club'],
    socialMedia: {
      followers: '12K',
      handle: '@sofia_mtz'
    }
  },
  {
    name: 'Marcus Thompson',
    sport: 'Tennis',
    category: "Men's Singles",
    nationality: 'United States',
    achievements: [
      'College Tennis Champion',
      'ITF Futures Winner'
    ],
    rankings: [
      'Current ATP Ranking: #320',
      'Career-High: #290'
    ],
    partnerships: ['Local Sports Store'],
    socialMedia: {
      followers: '8K',
      handle: '@marcus_t23'
    }
  },
  {
    name: 'Diego Ramirez',
    sport: 'Tennis',
    category: "Men's Singles",
    nationality: 'Spain',
    achievements: [
      'Junior Nationals Finalist',
      'Regional Tennis Champion'
    ],
    rankings: [
      'Current ATP Ranking: #410',
      'Career-High: #390'
    ],
    partnerships: ['Local Equipment Brand'],
    socialMedia: {
      followers: '5K',
      handle: '@diego_ramirez'
    }
  },
  {
    name: 'Elena Popov',
    sport: 'Tennis',
    category: "Women's Singles",
    nationality: 'Belarus',
    achievements: [
      'Regional Tournament Winner',
      'Challenger Semifinalist'
    ],
    rankings: [
      'Current WTA Ranking: #250',
      'Career-High: #240'
    ],
    partnerships: ['Local Apparel Brand'],
    socialMedia: {
      followers: '9K',
      handle: '@elena_popov'
    }
  },
  {
    name: 'James Wilson',
    sport: 'American Football',
    category: "Quarterback",
    nationality: 'United States',
    achievements: [
      'College MVP',
      'Regional Championship Winner'
    ],
    rankings: [
      'College QB Rating: #25',
      'Career Touchdowns: 30'
    ],
    partnerships: ['Local Car Dealership'],
    socialMedia: {
      followers: '15K',
      handle: '@wilson_qb'
    }
  },
  {
    name: 'Maria Santos',
    sport: 'Volleyball',
    category: "Indoor",
    nationality: 'Brazil',
    achievements: [
      'State League Champion',
      'Youth Nationals Finalist'
    ],
    rankings: [
      'Regional Ranking: #5 Spiker',
      'Career Points: 800'
    ],
    partnerships: ['Local Beverage Company'],
    socialMedia: {
      followers: '6K',
      handle: '@maria.santos'
    }
  }
];

const additionalAthletes: Athlete[] = [
  {
    name: 'Emma Schmidt',
    sport: 'Gymnastics',
    category: "Artistic",
    nationality: 'Germany',
    achievements: [
      'National Junior Champion',
      'Regional All-Around Winner'
    ],
    rankings: [
      'National Junior Ranking: #3',
      'Regional Ranking: #1'
    ],
    partnerships: ['Local Gymnastics Center'],
    socialMedia: {
      followers: '7K',
      handle: '@emma_turns'
    }
  },
  {
    name: 'Lucas Silva',
    sport: 'Soccer',
    category: "Midfielder",
    nationality: 'Brazil',
    achievements: [
      'Youth League Champion',
      'Regional Cup Winner'
    ],
    rankings: [
      'Youth National Ranking: Top 50',
      'Regional Team Starting Midfielder'
    ],
    partnerships: ['Local Sports Academy'],
    socialMedia: {
      followers: '10K',
      handle: '@lucas_silva10'
    }
  },
  {
    name: 'Yuki Yamamoto',
    sport: 'Figure Skating',
    category: "Singles",
    nationality: 'Japan',
    achievements: [
      'National Junior Championship Top 5',
      'Regional Competition Winner'
    ],
    rankings: [
      'National Junior Ranking: #4',
      'Regional Ranking: #2'
    ],
    partnerships: ['Local Ice Rink'],
    socialMedia: {
      followers: '6.5K',
      handle: '@yuki_skates'
    }
  },
  {
    name: 'Aisha Mohammed',
    sport: 'Athletics',
    category: "400m Hurdles",
    nationality: 'Kenya',
    achievements: [
      'National Youth Champion',
      'Regional Athletics Meet Winner'
    ],
    rankings: [
      'National Youth Ranking: #2',
      'Regional Ranking: #1'
    ],
    partnerships: ['Local Running Club'],
    socialMedia: {
      followers: '4K',
      handle: '@aisha_runs'
    }
  },
  {
    name: 'Thomas Weber',
    sport: 'Alpine Skiing',
    category: "Downhill",
    nationality: 'Austria',
    achievements: [
      'Regional Ski Race Winner',
      'National Junior Championship Participant'
    ],
    rankings: [
      'Regional Ranking: #3',
      'National Junior Ranking: Top 20'
    ],
    partnerships: ['Local Ski Shop'],
    socialMedia: {
      followers: '5.5K',
      handle: '@weber_ski'
    }
  },
  {
    name: 'Sophie Martin',
    sport: 'Cycling',
    category: "Road Racing",
    nationality: 'France',
    achievements: [
      'Regional Cycling Race Winner',
      'National Junior Championship Participant'
    ],
    rankings: [
      'Regional Ranking: #2',
      'National Junior Ranking: Top 15'
    ],
    partnerships: ['Local Bike Shop'],
    socialMedia: {
      followers: '3.5K',
      handle: '@sophie_cycles'
    }
  }
];

const moreAthletes: Athlete[] = [
  {
    name: 'Miguel Torres',
    sport: 'Boxing',
    category: "Lightweight",
    nationality: 'Mexico',
    achievements: [
      'Regional Golden Gloves Winner',
      'National Amateur Tournament Participant'
    ],
    rankings: [
      'Regional Amateur Ranking: #1',
      'National Amateur Ranking: Top 10'
    ],
    partnerships: ['Local Boxing Gym'],
    socialMedia: {
      followers: '11K',
      handle: '@miguel_boxing'
    }
  },
  {
    name: 'Anna Kowalska',
    sport: 'Handball',
    category: "Left Wing",
    nationality: 'Poland',
    achievements: [
      'Regional League Top Scorer',
      'National Junior Championship Participant'
    ],
    rankings: [
      'Regional League Ranking: #1 Left Wing',
      'National Junior Ranking: Top 20'
    ],
    partnerships: ['Local Handball Club'],
    socialMedia: {
      followers: '2.5K',
      handle: '@anna_handball'
    }
  },
  {
    name: 'David Cohen',
    sport: 'Golf',
    category: "Professional",
    nationality: 'Israel',
    achievements: [
      'Regional Amateur Champion',
      'National Amateur Tournament Participant'
    ],
    rankings: [
      'Regional Amateur Ranking: #1',
      'National Amateur Ranking: Top 10'
    ],
    partnerships: ['TaylorMade', 'Rolex', 'Bank Hapoalim'],
    socialMedia: {
      followers: '850K',
      handle: '@david_golf'
    }
  },
  {
    name: 'Nina Petrova',
    sport: 'Rhythmic Gymnastics',
    category: "Individual",
    nationality: 'Bulgaria',
    achievements: [
      'National Junior Champion',
      'Regional Competition Winner'
    ],
    rankings: [
      'National Junior Ranking: #1',
      'Regional Ranking: #1'
    ],
    partnerships: ['Local Gymnastics Studio'],
    socialMedia: {
      followers: '4.2K',
      handle: '@nina_rg'
    }
  },
  {
    name: 'Alex Chen',
    sport: 'Basketball',
    category: "Point Guard",
    nationality: 'China',
    achievements: [
      'College League MVP',
      'Regional Tournament Winner'
    ],
    rankings: [
      'College League Assists Leader',
      'Regional Ranking: Top 5'
    ],
    partnerships: ['Local Sports Equipment Store'],
    socialMedia: {
      followers: '11K',
      handle: '@chen_hoops'
    }
  },
  {
    name: "Liam O'Connor",
    sport: 'Rugby',
    category: "Flanker",
    nationality: 'Ireland',
    achievements: [
      'College League Player of the Year',
      'Regional Tournament Winner'
    ],
    rankings: [
      'College League Top Tackler',
      'Regional Ranking: Top 3'
    ],
    partnerships: ['Local Pub'],
    socialMedia: {
      followers: '4.2K',
      handle: '@liam_oconnor'
    }
  },
  {
    name: 'Isabella Ferrari',
    sport: 'Soccer',
    category: "Forward",
    nationality: 'Italy',
    achievements: [
      'Youth League Top Scorer',
      'Regional Tournament Winner'
    ],
    rankings: [
      'Youth League Top Scorer',
      'Regional Ranking: Top 5'
    ],
    partnerships: ['Local Pizzeria'],
    socialMedia: {
      followers: '3.8K',
      handle: '@isabella_f9'
    }
  },
  {
    name: 'Kai Tanaka',
    sport: 'Baseball',
    category: "Pitcher",
    nationality: 'Japan',
    achievements: [
      'College League MVP Pitcher',
      'Regional Tournament Winner'
    ],
    rankings: [
      'College League ERA Leader',
      'Regional Ranking: Top 3'
    ],
    partnerships: ['Local Sports Bar'],
    socialMedia: {
      followers: '9.5K',
      handle: '@kai_t18'
    }
  },
  {
    name: 'Sarah Anderson',
    sport: 'Swimming',
    category: "Freestyle",
    nationality: 'Australia',
    achievements: [
      'National Youth Champion',
      'Regional Meet Winner'
    ],
    rankings: [
      'National Youth Ranking: #1 100m Free',
      'Regional Ranking: #1'
    ],
    partnerships: ['Local Pool'],
    socialMedia: {
      followers: '8.9K',
      handle: '@sarah_swims'
    }
  },
  {
    name: 'Viktor Petrov',
    sport: 'Ice Hockey',
    category: "Center",
    nationality: 'Russia',
    achievements: [
      'Youth League MVP',
      'Regional Tournament Winner'
    ],
    rankings: [
      'Youth League Points Leader',
      'Regional Ranking: Top 3'
    ],
    partnerships: ['Local Ice Rink'],
    socialMedia: {
      followers: '7.5K',
      handle: '@viktor_hockey'
    }
  }
];
const AthletesPage = () => {
  const allAthletes = [...athletes, ...moreAthletes, ...additionalAthletes];
  const [selectedSport, setSelectedSport] = useState<string>('All');

  // Get unique sports for filter
  const sports = ['All', ...new Set(allAthletes.map(athlete => athlete.sport))];

  // Filter athletes based on selected sport
  const filteredAthletes = selectedSport === 'All'
    ? allAthletes
    : allAthletes.filter(athlete => athlete.sport === selectedSport);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Elite Athletes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Representing the world's top tennis talent, nurturing careers, and building lasting legacies in professional sports.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">Our Athletes</h2>
          <div className="flex flex-wrap gap-2">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedSport === sport
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sport}
                {selectedSport !== 'All' && selectedSport === sport && (
                  <span className="ml-2 text-xs bg-white text-blue-600 px-2 py-0.5 rounded-full">
                    {filteredAthletes.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Athletes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredAthletes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No athletes found for the selected sport.</p>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAthletes.map((athlete, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {athlete.sport}
                  </span>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {athlete.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-4 w-4 mr-1" />
                  {athlete.nationality}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {athlete.name}
              </h3>

              {/* Achievements */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="font-semibold text-gray-900">Key Achievements</span>
                </div>
                <ul className="space-y-2">
                  {athlete.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rankings */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Rankings</h4>
                <ul className="space-y-1 text-gray-600">
                  {athlete.rankings.map((ranking, i) => (
                    <li key={i}>{ranking}</li>
                  ))}
                </ul>
              </div>

              {/* Partnerships */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Partnerships</h4>
                <div className="flex flex-wrap gap-2">
                  {athlete.partnerships.map((partner, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center text-gray-600">
                  <Instagram className="h-5 w-5 mr-2" />
                  {athlete.socialMedia.handle}
                </div>
                <span className="text-sm font-medium text-blue-600">
                  {athlete.socialMedia.followers} followers
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AthletesPage;
