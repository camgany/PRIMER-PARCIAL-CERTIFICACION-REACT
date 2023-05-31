import React, { useState } from 'react';
import CerrarBtn from "../assets/cerrar.svg";
import AddClockForm from "./AddClockForm";

const Modal = ({ onAddClock }) => {
  const [city, setCity] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [timeZoneOffset, setTimeZoneOffset] = useState("");

  const ocultarModal = () => {
    setCity("");
    setTimeZone("");
    setTimeZoneOffset("");
    onAddClock({ city, timeZone, timeZoneOffset });
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0  bg-black bg-opacity-50 flex items-center justify-center">
      <div className="absolute right-3 top-2 w-4 h-5">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <AddClockForm
        city={city}
        timeZone={timeZone}
        timeZoneOffset={timeZoneOffset}
        setCity={setCity}
        setTimeZone={setTimeZone}
        setTimeZoneOffset={setTimeZoneOffset}
        onAddClock={onAddClock}
      />
    </div>
  );
};

export default Modal;
