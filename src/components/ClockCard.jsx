import React, { useState } from "react";

const ClockCard = ({ clock, onDelete }) => {
  const [visible, setVisible] = useState(true);

  const handleDelete = () => {
    setVisible(false);
    onDelete(clock.id, clock.city);
  };

  const handleDecrement = () => {
    if (clock.count > 0) {
      onDelete(clock.id, clock.city, clock.count - 1);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="card bg-lime-100 rounded-lg shadow-lg p-4 m-4 items-center justify-center">
      <div className="flex justify-between">
        <div className="card-title text-center rounded-md mb-2 bg-pink-200 w-full p-2 overflow-hidden max-h">
          <h1 className="text-4xl">
            <strong>{clock.city}</strong>
          </h1>
        </div>
      </div>

      <p className="card-info p-2 place-items-baseline">
        <strong>Zona Horaria:</strong> {clock.timeZone}
        <br />
        <strong>Diferencia de Zona Horaria:</strong> {clock.timeZoneOffset}
      </p>

      <p className="city-count p-2">
        <strong>Contador:</strong> {clock.count}
      </p>
    </div>
  );
};

export default ClockCard;
