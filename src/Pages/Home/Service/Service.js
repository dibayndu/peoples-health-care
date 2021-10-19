import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    // const{service}=props;
    const{id,name,price,time,img,description}=service;
    return (
        <div className="service pb-3">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h5>Price:{price}</h5>
            <h5>Time:{time}</h5>
            <p className="px-3">{description}</p>
        <Link to={`/booking/${id}`}><button className="btn btn-primary">Get Your Service</button></Link>
        </div>
    );
};

export default Service;