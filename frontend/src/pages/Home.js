import React from 'react';
import FlightList from '../components/FlightList';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import '../App.css'; // השתמשנו ב-App.css לכל הסגנון הכולל

const Home = () => (
    <div className="App">
        <header>
            <h1>✈️ Welcome to Flight Booker ✈️</h1>
        </header>

        <main>
            <section className="section">
                <h2>Available Flights</h2>
                <FlightList />
            </section>

            <section className="section">
                <h2>Book a Flight</h2>
                <BookingForm />
            </section>

            <section className="section">
                <h2>Your Bookings</h2>
                <BookingList />
            </section>
        </main>
    </div>
);

export default Home;
