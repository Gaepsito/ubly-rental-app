import React, { useEffect, useState } from 'react';

function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/cars')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los autos');
        }
        return response.json();
      })
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando autos disponibles...</p>;

  return (
    <div>
      <h2>Autos disponibles 🚗</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.brand} - {car.model} ({car.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarsPage;
