import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import AddClockForm from "./components/AddClockForm";
import Modal from "./components/Modal";
import CounterClocks from "./components/CounterClocks";

function App() {
  const [clocks, setClocks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddClock = (newClock) => {
    const updatedClocks = [...clocks, { ...newClock, count: 0 }];
    setClocks(updatedClocks);
  };

  const handleDecrementCount = (city) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.city === city) {
        const updatedCount = clock.count - 1;
        if (updatedCount === 0) {
          return null;
        }
        return { ...clock, count: updatedCount };
      }
      return clock;
    });

    setClocks(updatedClocks.filter(Boolean));
  };

  return (
    <div className="bg-pink-100 min-h-screen overflow-hidden">
      <Navbar />
      <div className="container bg-pink-100 flex flex-col items-center justify-center mx-auto self-center overscroll-hidden">
        {clocks.length > 0 && <CounterClocks clocks={clocks} onDecrement={handleDecrementCount} />}
        <Menu onShowForm={() => setShowForm(true)} clocks={clocks} />
        {showForm && (
          <Modal
            onAddClock={(newClock) => {
              handleAddClock(newClock);
              setShowForm(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
