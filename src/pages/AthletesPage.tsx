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
      '4x Grand Slam Champion',
      'World No. 1',
      'French Open Champion',
      'US Open Champion'
    ],
    rankings: [
      'Current WTA Ranking: #1',
      '2022 Year-End: #1',
      '2023 Year-End: #1'
    ],
    partnerships: ['Nike', 'Tecnifibre', 'Rolex', 'Visa'],
    socialMedia: {
      followers: '1.2M',
      handle: '@sofia_mtz'
    }
  },
  {
    name: 'Marcus Thompson',
    sport: 'Tennis',
    category: "Women's Singles",
    nationality: 'United States',
    achievements: [
      'US Open Champion',
      'WTA Finals Runner-up',
      'French Open Finalist',
      'Youngest Top 10 Player'
    ],
    rankings: [
      'Current WTA Ranking: #3',
      '2023 Year-End: #3',
      'Career-High: #3'
    ],
    partnerships: ['New Balance', 'Head', 'American Express', 'UPS'],
    socialMedia: {
      followers: '980K',
      handle: '@marcus_t23'
    }
  },
  {
    name: 'Diego Ramirez',
    sport: 'Tennis',
    category: "Men's Singles",
    nationality: 'Spain',
    achievements: [
      'Wimbledon Champion',
      'US Open Champion',
      'Youngest World No. 1',
      'Miami Open Champion'
    ],
    rankings: [
      'Current ATP Ranking: #2',
      '2023 Year-End: #2',
      'Career-High: #1'
    ],
    partnerships: ['Nike', 'Babolat', 'Rolex', 'BMW'],
    socialMedia: {
      followers: '2.1M',
      handle: '@diego_ramirez'
    }
  },
  {
    name: 'Elena Popov',
    sport: 'Tennis',
    category: "Women's Singles",
    nationality: 'Belarus',
    achievements: [
      'Australian Open Champion',
      'WTA Finals Champion',
      'US Open Finalist',
      'Multiple Grand Slam SF'
    ],
    rankings: [
      'Current WTA Ranking: #2',
      '2023 Year-End: #2',
      'Career-High: #2'
    ],
    partnerships: ['Wilson', 'Nike', 'Rolex'],
    socialMedia: {
      followers: '850K',
      handle: '@elena_popov'
    }
  },
  {
    name: 'James Wilson',
    sport: 'American Football',
    category: "Quarterback",
    nationality: 'United States',
    achievements: [
      'Super Bowl Champion',
      'NFL MVP',
      'Pro Bowl Selection',
      'Offensive Player of the Year'
    ],
    rankings: [
      'NFL QB Rating: #1',
      '2023 Season: MVP Runner-up',
      'Career TDs: 350+'
    ],
    partnerships: ['Nike', 'Gatorade', 'Ford', 'State Farm'],
    socialMedia: {
      followers: '1.5M',
      handle: '@wilson_qb'
    }
  },
  {
    name: 'Maria Santos',
    sport: 'Volleyball',
    category: "Indoor",
    nationality: 'Brazil',
    achievements: [
      'Olympic Gold Medalist',
      'World Championship MVP',
      'Nations League Champion',
      'Best Spiker Award'
    ],
    rankings: [
      'World Ranking: #1 Spiker',
      '2023 Season: MVP',
      'Career Points: 5000+'
    ],
    partnerships: ['Asics', 'Mikasa', 'Red Bull', 'Banco do Brasil'],
    socialMedia: {
      followers: '620K',
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
      'Olympic All-Around Gold',
      'World Champion Balance Beam',
      'European Championship Winner',
      '3x National Champion'
    ],
    rankings: [
      'World Ranking: #1 All-Around',
      '2023 Season: 5 Gold Medals',
      'Perfect 10s: 8'
    ],
    partnerships: ['Adidas', 'Deutsche Bank', 'Lufthansa'],
    socialMedia: {
      followers: '780K',
      handle: '@emma_turns'
    }
  },
  {
    name: 'Lucas Silva',
    sport: 'Soccer',
    category: "Midfielder",
    nationality: 'Brazil',
    achievements: [
      'Copa America Champion',
      'Champions League Winner',
      'La Liga Best Midfielder',
      'Olympic Gold Medalist'
    ],
    rankings: [
      'FIFA Ranking: #8',
      '2023 Season: 15 Assists',
      'International Caps: 65'
    ],
    partnerships: ['Nike', 'Banco do Brasil', 'Guaraná Antarctica'],
    socialMedia: {
      followers: '2.8M',
      handle: '@lucas_silva10'
    }
  },
  {
    name: 'Yuki Yamamoto',
    sport: 'Figure Skating',
    category: "Singles",
    nationality: 'Japan',
    achievements: [
      'World Champion',
      'Grand Prix Final Gold',
      'Four Continents Champion',
      'National Champion'
    ],
    rankings: [
      'ISU World Ranking: #1',
      '2023 Season: 3 Golds',
      'Personal Best: 223.40'
    ],
    partnerships: ['Uniqlo', 'Toyota', 'Seiko'],
    socialMedia: {
      followers: '1.1M',
      handle: '@yuki_skates'
    }
  },
  {
    name: 'Aisha Mohammed',
    sport: 'Athletics',
    category: "400m Hurdles",
    nationality: 'Kenya',
    achievements: [
      'Olympic Silver Medalist',
      'World Champion',
      'African Record Holder',
      'Diamond League Winner'
    ],
    rankings: [
      'World Ranking: #2',
      '2023 Season: 6 Wins',
      'Personal Best: 52.16s'
    ],
    partnerships: ['Nike', 'Safaricom', 'Kenya Airways'],
    socialMedia: {
      followers: '450K',
      handle: '@aisha_runs'
    }
  },
  {
    name: 'Thomas Weber',
    sport: 'Alpine Skiing',
    category: "Downhill",
    nationality: 'Austria',
    achievements: [
      'Olympic Downhill Gold',
      'World Cup Overall Winner',
      '5x World Cup Race Winner',
      'World Champion'
    ],
    rankings: [
      'FIS Ranking: #1 Downhill',
      '2023 Season: Crystal Globe',
      'Career Wins: 25'
    ],
    partnerships: ['Atomic', 'Red Bull', 'Raiffeisen'],
    socialMedia: {
      followers: '680K',
      handle: '@weber_ski'
    }
  },
  {
    name: 'Sophie Martin',
    sport: 'Cycling',
    category: "Road Racing",
    nationality: 'France',
    achievements: [
      'Tour de France Winner',
      'World Road Race Champion',
      'Olympic Time Trial Gold',
      'European Champion'
    ],
    rankings: [
      'UCI Ranking: #2',
      '2023 Season: 12 Wins',
      'Grand Tours: 3 Wins'
    ],
    partnerships: ['Specialized', 'AG2R', 'Garmin'],
    socialMedia: {
      followers: '520K',
      handle: '@sophie_cycles'
    }
  },
  {
    name: 'Miguel Torres',
    sport: 'Boxing',
    category: "Lightweight",
    nationality: 'Mexico',
    achievements: [
      'WBC World Champion',
      'Olympic Gold Medalist',
      '30-0 Professional Record',
      'Ring Magazine Fighter of the Year'
    ],
    rankings: [
      'World Ranking: #1 Lightweight',
      '2023 Record: 4-0',
      'KO Percentage: 80%'
    ],
    partnerships: ['Everlast', 'Corona', 'Tecate'],
    socialMedia: {
      followers: '1.5M',
      handle: '@miguel_boxing'
    }
  },
  {
    name: 'Anna Kowalska',
    sport: 'Handball',
    category: "Left Wing",
    nationality: 'Poland',
    achievements: [
      'Champions League Winner',
      'European Championship MVP',
      'World Championship Silver',
      'National Cup Winner'
    ],
    rankings: [
      'EHF Ranking: #3',
      '2023 Season: Top Scorer',
      'International Goals: 450+'
    ],
    partnerships: ['Hummel', 'PGE', 'Plus'],
    socialMedia: {
      followers: '290K',
      handle: '@anna_handball'
    }
  },
  {
    name: 'David Cohen',
    sport: 'Golf',
    category: "Professional",
    nationality: 'Israel',
    achievements: [
      'Major Championship Winner',
      'Ryder Cup Champion',
      'European Tour Winner',
      'World Top 10 Player'
    ],
    rankings: [
      'World Golf Ranking: #8',
      '2023 Season: 2 Wins',
      'Career Earnings: $25M+'
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
      'Olympic All-Around Gold',
      'World Champion Ribbon',
      '3x European Champion',
      'World Cup Series Winner'
    ],
    rankings: [
      'FIG Ranking: #1',
      '2023 Season: 8 Golds',
      'Perfect Scores: 12'
    ],
    partnerships: ['Pastorelli', 'Bulgarian Air', 'Fibank'],
    socialMedia: {
      followers: '420K',
      handle: '@nina_rg'
    }
  }
];

const moreAthletes: Athlete[] = [
  {
    name: 'Alex Chen',
    sport: 'Basketball',
    category: "Point Guard",
    nationality: 'China',
    achievements: [
      'NBA All-Star',
      'Most Improved Player',
      'Olympic Silver Medalist',
      'Asian Games MVP'
    ],
    rankings: [
      'NBA Assists: #3',
      '2023 Season: All-NBA Third Team',
      'Career Triple-Doubles: 25'
    ],
    partnerships: ['Under Armour', 'Gatorade', 'Huawei'],
    socialMedia: {
      followers: '1.1M',
      handle: '@chen_hoops'
    }
  },
  {
    name: "Liam O'Connor",
    sport: 'Rugby',
    category: "Flanker",
    nationality: 'Ireland',
    achievements: [
      'Six Nations Champion',
      'World Cup Finalist',
      'European Cup Winner',
      'Player of the Year'
    ],
    rankings: [
      'World Rugby Ranking: #2',
      '2023 Season: Team Captain',
      'International Caps: 85'
    ],
    partnerships: ['Canterbury', 'Guinness', 'Aer Lingus'],
    socialMedia: {
      followers: '420K',
      handle: '@liam_oconnor'
    }
  },
  {
    name: 'Isabella Ferrari',
    sport: 'Soccer',
    category: "Forward",
    nationality: 'Italy',
    achievements: [
      'Champions League Winner',
      'Serie A Top Scorer',
      'European Championship Winner',
      'FIFA Best Player Nominee'
    ],
    rankings: [
      'FIFA Ranking: #5',
      '2023 Season: 30 Goals',
      'International Goals: 45'
    ],
    partnerships: ['Puma', 'Ferrari', 'Barilla'],
    socialMedia: {
      followers: '380K',
      handle: '@isabella_f9'
    }
  },
  {
    name: 'Kai Tanaka',
    sport: 'Baseball',
    category: "Pitcher",
    nationality: 'Japan',
    achievements: [
      'World Series Champion',
      'Cy Young Award Winner',
      'All-Star Game MVP',
      'Perfect Game Achievement'
    ],
    rankings: [
      'MLB ERA Leader',
      '2023 Season: 22 Wins',
      'Career Strikeouts: 2500+'
    ],
    partnerships: ['Mizuno', 'Asahi', 'JAL'],
    socialMedia: {
      followers: '950K',
      handle: '@kai_t18'
    }
  },
  {
    name: 'Sarah Anderson',
    sport: 'Swimming',
    category: "Freestyle",
    nationality: 'Australia',
    achievements: [
      'Olympic Gold Medalist',
      'World Record Holder',
      'Commonwealth Games Champion',
      '5x World Champion'
    ],
    rankings: [
      'World Ranking: #1 100m Free',
      '2023 Season: 3 World Records',
      'Career Medals: 25+'
    ],
    partnerships: ['Speedo', 'Omega', 'Australian Sports Commission'],
    socialMedia: {
      followers: '890K',
      handle: '@sarah_swims'
    }
  },
  {
    name: 'Viktor Petrov',
    sport: 'Ice Hockey',
    category: "Center",
    nationality: 'Russia',
    achievements: [
      'Stanley Cup Champion',
      'NHL All-Star',
      'World Championship Gold',
      'Art Ross Trophy Winner'
    ],
    rankings: [
      'NHL Points Leader',
      '2023 Season: 105 Points',
      'Career Goals: 400+'
    ],
    partnerships: ['CCM', 'Red Bull', 'Gazprom'],
    socialMedia: {
      followers: '750K',
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