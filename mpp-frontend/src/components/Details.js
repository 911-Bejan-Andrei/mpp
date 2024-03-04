// Details.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Details({ id }) {

  const { carId } = useParams();
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry', color: 'Blue', engine: 'V6', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', color: 'Red', engine: 'Inline-4', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Mustang', color: 'Yellow', engine: 'V8', year: 2021 }
  ];

  const foundCar = cars.find(car => car.id === parseInt(carId));
  return (
    <div>
      <p>ID: {foundCar.id}</p>
      <p>Engine: {foundCar.engine}</p>
      <p>Year: {foundCar.year}</p>
    </div>
  );
}

export default Details;
