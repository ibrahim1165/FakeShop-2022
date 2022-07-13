import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, SetServices] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => SetServices(data))
    }, [])
    return (
        <div className="text-center mt-12">
        <div className="text-3xl font-bold text-black">
            <h2>Our Products</h2>
            <p className="mt-4">We are Best Product Provider</p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 mx-auto px-1 lg:px-16 mt-20">
           {services.slice(0,6).map((service) =><Service
           key={service.id}
           service={service}
           ></Service>)}
        </div>
    </div>
    );
};

export default Services;