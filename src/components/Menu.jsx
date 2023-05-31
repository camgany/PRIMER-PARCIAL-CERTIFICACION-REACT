import React, { useState } from "react";
import ClockCard from "./ClockCard";
import newClock from "../assets/nuevo-gasto.svg";

const Menu = ({ onShowForm, clocks }) => {
  const [cityCounts, setCityCounts] = useState({}); // Estado para almacenar el contador de cada ciudad

  const handleDeleteClock = (clockId, city) => {
    // Eliminar el reloj según su ID
    const updatedClocks = clocks.filter((clock) => clock.id !== clockId);
    // Actualizar el estado de los relojes
    setClocks(updatedClocks);

    // Disminuir el contador de la ciudad en 1
    setCityCounts((prevCounts) => ({
      ...prevCounts,
      [city]: prevCounts[city] - 1,
    }));

    // Eliminar el dato del Local Storage
    localStorage.removeItem(clockId);
  };

  const setClocks = (updatedClocks) => {
    // Actualizar el estado de los relojes
    // Implementa la lógica específica que tengas para actualizar los relojes en el componente `Menu`
  };

  const onAddClock = (newClock) => {
    // Agregar el nuevo reloj a la lista de relojes
    // Implementa la lógica específica que tengas para agregar el nuevo reloj en el componente `Menu`

    // Incrementar el contador de la ciudad en 1
    setCityCounts((prevCounts) => ({
      ...prevCounts,
      [newClock.city]: (prevCounts[newClock.city] || 0) + 1,
    }));

    // Guardar los datos en el Local Storage
    saveDataLocally(newClock);
  };

  const saveDataLocally = (newClock) => {
    // Implementa la lógica específica para guardar los datos en el Local Storage
  };

  return (
    <div className="bg-pink-100 flex flex-col items-center mx-auto self-center">
      <div className="clock-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clocks.map((clock, index) => {
          const { city, timeZone, timeZoneOffset } = clock;
          if (!city || !timeZone || !timeZoneOffset) {
            return null; // No mostrar la tarjeta si falta alguno de los campos
          }
          return (
            <ClockCard
              key={index}
              clock={clock}
              count={cityCounts[clock.city] || 0} // Pasar el contador de la ciudad
              onDelete={handleDeleteClock}
            />
          );
        })}
      </div>

      <div className="fixed bottom-4 right-4">
        <img className="w-10 h-10" src={newClock} alt="nuevo gasto" onClick={onShowForm} />
      </div>
    </div>
  );
};

export default Menu;
