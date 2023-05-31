import React from 'react';

const CounterClocks = ({ clocks }) => {
  const countClocksByCity = (city) => {
    return clocks.reduce((count, clock) => {
      if (clock.city === city) {
        return count + 1;
      }
      return count;
    }, 0);
  };


  const citiesWithCounts = Array.from(new Set(clocks.map((clock) => clock.city))).map((city) => ({
    city,
    count: countClocksByCity(city),
  }));

  const filteredCities = citiesWithCounts.filter((city) => city.count > 0);

  if (filteredCities.length === 0) {
    return null;
  }

  return (
    <div className="container bg-lime-100 rounded-lg shadow-lg p-3 m-4">
      <h1 className="card-title text-4xl text-center rounded-md mb-6 p-2 bg-pink-200 w-full">
        <strong>Conteo de relojes por ciudad</strong>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCities.map((city) => (
          <span key={city.city} className="text-lime-950 bg-pink-200 rounded-md p-2">
            <strong>{city.city}</strong>: {city.count} {city.count === 1 ? 'reloj' : 'relojes'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CounterClocks;
