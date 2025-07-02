import React from 'react';
import CountUp from 'react-countup';

const stats = [
  {
    image: 'https://i.ibb.co.com/cScyJfQ2/success-doctor.png',
    count: 199,
    label: 'Total Doctors',
  },
  {
    image: 'https://i.ibb.co.com/B2Xtv5Nj/success-review.png',
    count: 467,
    label: 'Total Reviews',
  },
  {
    image: 'https://i.ibb.co.com/tpTRbw7j/success-patients.png',
    count: 1900,
    label: 'Patients',
  },
  {
    image: 'https://i.ibb.co.com/NdRrG2pW/success-staffs.png',
    count: 300,
    label: 'Total Stuffs',
  },
];

function ServicesStats() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">We Provide Best Medical Services</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left space-y-3"
          >
            <img src={item.image} alt={item.label} className="w-10 h-10" />
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={item.count} duration={10} />+
            </h3>
            <p className="text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesStats;

