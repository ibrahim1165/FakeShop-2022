import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {

    const { title, description, image, price, id } = service;
    return (
        <div>
            <div class="card card-compact mt-12 mb-24 w-[400px] h-[450px] bg-white shadow-lg">
                <Fade left>
                    <figure><img className="w-56 h-56" src={image} alt="product" /></figure>
                </Fade>
                <div class="card-body">
                    <Fade right>
                    <h2 class="card-title">Name: {title}</h2>
                    <p>Price: ${price}</p>
                    <p className="">Description: <span className="text-sm text-gray-500">{description.slice(0, 90)}</span></p>
                    </Fade>
                    <div className="text-end">
                        <Link className="mt[-40px] btn btn-outline btn-secondary" to={`/update/${id}`}>Details</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;