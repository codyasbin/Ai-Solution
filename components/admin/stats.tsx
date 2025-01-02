"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // For Chart.js

ChartJS.register(ArcElement, Tooltip, Legend); // Register chart components

interface StatsProps {
  stats: any; // Stats data passed as props
}

const Stats = ({ stats }: StatsProps) => {
  const topCountries = stats?.countryStats?.labels
    .map((label: string, index: number) => ({
      country: label,
      count: stats.countryStats.datasets[0].data[index],
    }))
    .sort((a: any, b: any) => b.count - a.count)
    .slice(0, 5); // Get the top 5 countries

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-white mb-8 text-center">Dashboard Stats</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Total Contacts */}
        <div className="bg-purple-800 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold text-center mb-4">Total Contacts</h3>
          <div className="flex justify-center items-center">
            <p className="text-6xl font-extrabold">{stats ? stats.totalContacts : 0}</p>
          </div>
        </div>

        {/* Country Stats Pie Chart */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-center mb-6">Contacts by Country</h3>
          {stats?.countryStats ? (
            <div className="flex justify-center">
              <Pie data={stats.countryStats} />
            </div>
          ) : (
            <p className="text-center mt-4 text-gray-500">No data available</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Job Title Distribution */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-center mb-6">Job Title Distribution</h3>
          <ul>
            {stats?.jobTitleStats &&
              Object.entries(stats.jobTitleStats).map(([title, count]) => (
                <li key={title} className="flex justify-between mb-4">
                  <span>{title}</span>
                  <span>{count as number}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Top 5 Countries */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-center mb-6">Top 5 Countries</h3>
          {topCountries.length > 0 ? (
            <ul>
              {topCountries.map((country: { country: string; count: number }) => (
                <li key={country.country} className="flex justify-between mb-4">
                  <span>{country.country}</span>
                  <span>{country.count}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center mt-4 text-gray-500">No data available</p>
          )}
        </div>
      </div>

      {/* Total Companies */}
      <div className="bg-purple-800 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8">
        <h3 className="text-2xl font-bold text-center mb-4">Total Companies</h3>
        <div className="flex justify-center items-center">
          <p className="text-6xl font-extrabold">{stats ? stats.totalCompanies : 0}</p>
        </div>
      </div>

      {/* Last Contact Added */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8">
        <h3 className="text-2xl font-bold text-center mb-6">Last Contact Added</h3>
        {stats?.lastContact ? (
          <div className="text-center">
            <p className="text-xl font-semibold">{stats.lastContact.name}</p>
            <p className="text-lg text-gray-600">{stats.lastContact.email}</p>
          </div>
        ) : (
          <p className="text-center mt-4 text-gray-500">No recent contact added</p>
        )}
      </div>
    </div>
  );
};

export default Stats;
