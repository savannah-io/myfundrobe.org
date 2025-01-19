import React from 'react';
import { User } from 'lucide-react';

const donors = [
  {
    name: "Sarah J.",
    level: "Bronze",
    useIcon: true,
    timeAgo: "4 days ago"
  },
  {
    name: "Michael C.",
    level: "Silver",
    image: "https://images.unsplash.com/photo-1559163387-e0893df76b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "3 days 15 hrs ago"
  },
  {
    name: "Emily R.",
    level: "Bronze",
    useIcon: true,
    timeAgo: "3 days 2 hrs ago"
  },
  {
    name: "David K.",
    level: "Gold",
    useIcon: true,
    timeAgo: "2 days 18 hrs ago"
  },
  {
    name: "Lisa T.",
    level: "Silver",
    useIcon: true,
    timeAgo: "2 days 7 hrs ago"
  },
  {
    name: "Robert P.",
    level: "Gold",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "2 days 3 hrs ago"
  },
  {
    name: "Anna W.",
    level: "Diamond",
    useIcon: true,
    timeAgo: "1 day 22 hrs ago"
  },
  {
    name: "James B.",
    level: "Silver",
    useIcon: true,
    timeAgo: "1 day 16 hrs ago"
  },
  {
    name: "Maria S.",
    level: "Gold",
    useIcon: true,
    timeAgo: "1 day 9 hrs ago"
  },
  {
    name: "Thomas H.",
    level: "Bronze",
    useIcon: true,
    timeAgo: "1 day 4 hrs ago"
  },
  {
    name: "Patricia L.",
    level: "Gold",
    image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "22 hrs ago"
  },
  {
    name: "John M.",
    level: "Silver",
    useIcon: true,
    timeAgo: "18 hrs ago"
  },
  {
    name: "Susan R.",
    level: "Diamond",
    useIcon: true,
    timeAgo: "15 hrs ago"
  },
  {
    name: "Kevin P.",
    level: "Bronze",
    useIcon: true,
    timeAgo: "12 hrs ago"
  },
  {
    name: "Linda K.",
    level: "Silver",
    useIcon: true,
    timeAgo: "9 hrs ago"
  },
  {
    name: "Richard B.",
    level: "Gold",
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "6 hrs ago"
  },
  {
    name: "Nancy W.",
    level: "Diamond",
    useIcon: true,
    timeAgo: "4 hrs ago"
  },
  {
    name: "Daniel T.",
    level: "Silver",
    useIcon: true,
    timeAgo: "2 hrs ago"
  },
  {
    name: "Margaret S.",
    level: "Gold",
    useIcon: true,
    timeAgo: "1 hr ago"
  },
  {
    name: "George M.",
    level: "Bronze",
    useIcon: true,
    timeAgo: "30 mins ago"
  },
  {
    name: "Helen F.",
    level: "Gold",
    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "25 mins ago"
  },
  {
    name: "William P.",
    level: "Silver",
    useIcon: true,
    timeAgo: "20 mins ago"
  },
  {
    name: "Betty S.",
    level: "Diamond",
    useIcon: true,
    timeAgo: "18 mins ago"
  },
  {
    name: "Charles M.",
    level: "Diamond",
    image: "https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "15 mins ago"
  },
  {
    name: "Dorothy H.",
    level: "Gold",
    useIcon: true,
    timeAgo: "12 mins ago"
  },
  {
    name: "Edward T.",
    level: "Gold",
    useIcon: true,
    timeAgo: "10 mins ago"
  },
  {
    name: "Ruth W.",
    level: "Diamond",
    image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "8 mins ago"
  },
  {
    name: "Frank L.",
    level: "Silver",
    useIcon: true,
    timeAgo: "7 mins ago"
  },
  {
    name: "Virginia B.",
    level: "Gold",
    useIcon: true,
    timeAgo: "6 mins ago"
  },
  {
    name: "Arthur C.",
    level: "Diamond",
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "5 mins ago"
  },
  {
    name: "Gloria R.",
    level: "Gold",
    useIcon: true,
    timeAgo: "4 mins ago"
  },
  {
    name: "Henry K.",
    level: "Diamond",
    useIcon: true,
    timeAgo: "3 mins ago"
  },
  {
    name: "Evelyn M.",
    level: "Gold",
    image: "https://images.unsplash.com/photo-1559163387-e0893df76b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    timeAgo: "2 mins ago"
  },
  {
    name: "Walter S.",
    level: "Diamond",
    useIcon: true,
    timeAgo: "1 min ago"
  },
  {
    name: "Mildred P.",
    level: "Gold",
    useIcon: true,
    timeAgo: "Just now"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Bronze':
      return 'text-amber-600';
    case 'Silver':
      return 'text-gray-400';
    case 'Gold':
      return 'text-yellow-400';
    case 'Diamond':
      return 'text-blue-300';
    default:
      return 'text-purple-200';
  }
};

export function DonorsReel() {
  return (
    <div className="bg-purple-700 py-12 overflow-hidden relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Recent Supporters
        </h2>
        
        {/* Scrolling container */}
        <div className="relative flex overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-700 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-700 to-transparent z-10" />
          
          {/* Scrolling content */}
          <div className="flex space-x-8 animate-scroll-right">
            {[...donors, ...donors].map((donor, index) => (
              <div
                key={`${donor.name}-${index}`}
                className="flex flex-col items-center space-y-2 flex-shrink-0"
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                  {donor.useIcon ? (
                    <div className="relative w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center">
                      <User className="w-10 h-10 text-white/80" />
                    </div>
                  ) : (
                    <img
                      src={donor.image}
                      alt={donor.name}
                      className="relative w-20 h-20 rounded-full object-cover"
                    />
                  )}
                </div>
                <span className="text-white font-medium">{donor.name}</span>
                <span className={`font-semibold ${getLevelColor(donor.level)}`}>
                  {donor.level} Donor
                </span>
                <span className="text-purple-300 text-sm">{donor.timeAgo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}