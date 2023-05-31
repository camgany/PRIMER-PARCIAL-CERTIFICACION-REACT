import React, { useState, useEffect } from 'react';

const AddClockForm = ({ onAddClock }) => {
  const [city, setCity] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [timeZoneOffset, setTimeZoneOffset] = useState('');
  const [timeZoneOptions] = useState([
    'GMT',
    'EST',
    'PST',
    'CET',
    'JST',
    'AEST',
    'IST',
    'EET',
    'PHT',
    'AST',
    'HST',
    'AKST',
    'ACST',
    // Agrega más opciones de zona horaria aquí
  ]);

  const [cityOptions] = useState([
    'La Paz - Bolivia',
    'CDMX - México',
    'Nueva York - EE.UU.',
    'Londres - Reino Unido',
    'Tokio - Japón',
    'Sídney - Australia',
    'Moscú - Rusia',
    'Dubái - Emiratos Árabes Unidos',
    'Pekín - China',
    'París - Francia',
    'Roma - Italia',
    'Toronto - Canadá',
    'Berlín - Alemania',
    'Atenas - Grecia',
    'Bangkok - Tailandia',
    'Estambul - Turquía',
    'El Cairo - Egipto',
    'Ciudad del Cabo - Sudáfrica',
    'Río de Janeiro - Brasil',
    'Buenos Aires - Argentina',
    'Santiago - Chile',
    'Lima - Perú',
    'Bogotá - Colombia',
    'Ciudad de Panamá - Panamá',
    'San Juan - Puerto Rico',
    'Wellington - Nueva Zelanda',
    'Seúl - Corea del Sur',
    'Mumbai - India',
    'Ámsterdam - Países Bajos',
  ]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('clockData'));
    if (existingData) {
      setCity(existingData.city);
      setTimeZone(existingData.timeZone);
      setTimeZoneOffset(existingData.timeZoneOffset);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos antes de agregar el nuevo reloj
    if (city.trim() === '' || timeZone.trim() === '' || timeZoneOffset.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar el rango de timeZoneOffset
    if (timeZoneOffset < -120 || timeZoneOffset > 120) {
      alert('El desplazamiento horario debe estar entre -120 y +120.');
      return;
    }

    // Crear un nuevo objeto de reloj con los datos ingresados
    const newClock = {
      city,
      timeZone,
      timeZoneOffset,
    };

    // Llamar a la función onAddClock pasada como propiedad
    onAddClock(newClock);

    // Restablecer los valores del formulario después de agregar el reloj
    setCity('');
    setTimeZone('');
    setTimeZoneOffset('');

    // Guardar los datos en el almacenamiento local (localStorage)
    saveDataLocally(newClock);
  };

  const saveDataLocally = (newClock) => {
    const existingData = JSON.parse(localStorage.getItem('clockData')) || [];
    const updatedData = [...existingData, newClock];
    localStorage.setItem('clockData', JSON.stringify(updatedData));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-lime-100 shadow-lg rounded-md p-5 w-1/2 md:w-1/3 mx-auto mt-15">
      <div>
        <div className="text-center text-2xl font-bold mb-5 bg-pink-300 mt-0 rounded-md text-lime-950">Agregar reloj</div>
        <p className="text-left text-sm mb-5 text-lime-950">
          <strong>Ciudad/País:</strong>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-2 border-pink-300 rounded-md p-1 w-full mt-2 mb-2 text-lime-950"
          >
            <option value="">Seleccionar</option>
            {cityOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </p>
      </div>
      <div>
        <p className="text-left text-sm mb-5 text-lime-950">
          <strong>Zona horaria:</strong>
          <select
            id="timeZone"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="border-2 border-pink-300 rounded-md p-1 w-full mt-2 mb-2 text-lime-950"
          >
            <option value="">Seleccionar</option>
            {timeZoneOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </p>
        <p className="text-left text-sm mb-5 Zona horaria:">
          <strong>Desplazamiento horario:</strong>
          <input
            type="number"
            id="timeZoneOffset"
            value={timeZoneOffset}
            onChange={(e) => setTimeZoneOffset(e.target.value)}
            className="border-2 border-pink-300 rounded-md p-1 w-full mt-2 mb-2 Zona horaria:"
            placeholder="Ej. +4 o -1"
          />
        </p>
      </div>
      <button
        type="submit" 
        className='bg-pink-300 hover:bg-pink-500 text-lime-950 font-bold py-2 px-4 rounded-md w-full'
      >
        Agregar reloj
      </button>
    </form>
  );
};

export default AddClockForm;
