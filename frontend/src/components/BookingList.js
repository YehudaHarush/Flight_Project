import React, { useEffect, useState } from 'react';
import { getBookings } from '../api/api';
import './BookingList.css';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const { data } = await getBookings();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="booking-list-container">
            <div className="booking-list-scroll">
                {bookings.map((booking) => (
                    <div key={booking.id} className="booking-card">
                        <strong>Flight ID:</strong> {booking.flight_id}<br />
                        <strong>Name:</strong> {booking.user_name}<br />
                        <strong>Email:</strong> {booking.email}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookingList;
