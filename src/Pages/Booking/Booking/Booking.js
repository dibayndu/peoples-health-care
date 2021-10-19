import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId}=useParams();
    return (
        <div className="container bg-secondary mt-5" >
            <h2>Services:{serviceId}</h2>
            <p>Your Service has booked,we will contact you as soon as.</p>
        </div>
    );
};

export default Booking;