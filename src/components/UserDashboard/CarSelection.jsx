import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const CarSelection = () => {
  const [cars, setCars] = useState([1, 2, 3, 4, 5]); // Initial cars, each can represent a unique car.

  // Function to handle adding a new car
  const handleAddCar = () => {
    setCars((prevCars) => [...prevCars, prevCars.length + 1]); // Add a new unique car
  };

  return (
    <section className="w-full min-h-[70vh] py-12 px-[5%] bg-[#292826]">
      <h1 className="text-2xl md:text-5xl text-center text-primary-200 font-fraunces font-semibold">
        Choose Your Car
      </h1>
      <div className="w-full h-full mt-12 flex justify-center items-center flex-wrap gap-12">
        {cars.map((car, index) => (
          <div
            key={index}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 bg-white rounded-full text-black flex justify-center items-center"
          >
            {car}
          </div>
        ))}
        <div
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 bg-white rounded-full text-lg flex justify-center items-center cursor-pointer"
          onClick={handleAddCar}
        >
          Add Car <FaPlus className="ml-1" />
        </div>
      </div>
    </section>
  );
};

export default CarSelection;
