import React, { useState, useEffect } from 'react';
import { getFlights } from '../api/api';
import './FlightList.css';

const FlightList = () => {
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const { data } = await getFlights();
                setFlights(data);
            } catch (error) {
                setError('Error fetching flights');
                if (process.env.NODE_ENV !== 'test') {
                    console.error('Error fetching flights:', error);
                }
            }
        };

        fetchFlights();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <div className="flight-list-scroll">
                {flights.map((flight) => (
                    <div key={flight.id} className="flight-card">
                        <strong>{flight.name}</strong><br />
                        {flight.departure} ➡️ {flight.arrival}<br />
                        ${flight.price}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlightList;
