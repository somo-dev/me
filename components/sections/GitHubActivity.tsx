"use client";

import { useState, useEffect } from "react";
import { Github, Calendar, GitCommit, Star, GitFork } from "lucide-react";

const stats = [
  {
    icon: Github,
    label: "Repositories",
    value: "192",
    color: "text-blue-400"
  },
  {
    icon: GitCommit,
    label: "Commits",
    value: "384",
    color: "text-orange-400"
  },
  {
    icon: Star,
    label: "Stars",
    value: "52",
    color: "text-green-400"
  },
  {
    icon: GitFork,
    label: "Forks",
    value: "38",
    color: "text-purple-400"
  }
];

export default function GitHubActivity() {
  const [contributions, setContributions] = useState<Array<{date: string, level: number, count: number}>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate mock contribution data only on client side
const generateContributions = () => {
  const contributions = [];
  const today = new Date();
  
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const level = Math.floor(Math.random() * 5); // 0-4 contribution levels
    contributions.push({
      date: date.toISOString().split('T')[0],
      level,
      count: level === 0 ? 0 : Math.floor(Math.random() * 10) + 1
    });
  }
  
  return contributions;
};

    setContributions(generateContributions());
  }, []);
  
  const getContributionColor = (level: number) => {
    const colors = [
      'bg-gray-800',      // 0 contributions
      'bg-green-900',     // 1-2 contributions  
      'bg-green-700',     // 3-4 contributions
      'bg-green-500',     // 5-7 contributions
      'bg-green-400'      // 8+ contributions
    ];
    return colors[level];
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">
            Contributions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            GitHub{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 italic">
              Activity
            </span>
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center group hover:border-gray-600 transition-colors duration-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contribution Graph */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              Contribution Activity
            </h3>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Last 12 months</span>
            </div>
          </div>

          {/* Contribution grid */}
          {mounted && (
          <div className="mb-4">
            <div className="grid grid-cols-53 gap-1 mb-4">
              {contributions.map((contrib, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(contrib.level)} hover:ring-1 hover:ring-green-400 transition-all duration-200 cursor-pointer`}
                  title={`${contrib.count} contributions on ${contrib.date}`}
                />
              ))}
            </div>
            
            {/* Legend */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                {contributions.reduce((sum, c) => sum + c.count, 0)} contributions in the last year
              </span>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-xs">Less</span>
                <div className="flex space-x-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-xs">More</span>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}