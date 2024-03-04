// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Sample list of cars
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry', color: 'Blue', engine: 'V6', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', color: 'Red', engine: 'Inline-4', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Mustang', color: 'Yellow', engine: 'V8', year: 2021 }
  ];

  return (
    <div>
      <h1>List of Cars</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Brand</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Model</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Color</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index} style={{ borderBottom: '1px solid black' }}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <Link to={`/details/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {car.brand}
                </Link>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{car.model}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{car.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
