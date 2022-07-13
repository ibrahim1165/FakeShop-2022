import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, description, image, price } = service;
    console.log(service)
    return (
        <div>
        <div class="card card-compact mt-12 mb-24 w-[400px] h-[550px] bg-white shadow-lg">
            <figure><img className="w-56 h-56" src={image} alt="product"/></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {title}</h2>
                <p>Price: ${price}</p>
                <p className="">Description: <span className="text-sm text-gray-500">{description}</span></p>
                <div className="text-end">
                <Link className="mt[-40px] btn btn-outline btn-secondary" to="">Details</Link>
            </div>
            </div> 
           
        </div>
    </div>
    );
};

export default Service;