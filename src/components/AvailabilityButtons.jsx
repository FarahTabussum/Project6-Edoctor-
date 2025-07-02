import React from 'react';

const colors = [
  'bg-orange-100'	
];

const AvailabilityButtons = ({ available }) => {
  const days = available.split(' ');

  return (
    <div className="flex gap-2 items-center">
      {days.map((day, index) => (
        <button
          key={index}
          className={`text-orange-500 px-3 py-1 rounded-xl ${colors[index % colors.length]}`}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default AvailabilityButtons;
