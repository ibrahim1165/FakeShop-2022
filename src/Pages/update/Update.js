import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseProduct from '../../Hooks/UseProduct';
const Update = () => {
    const { id } = useParams()
    const [services, setServices] = UseProduct(id)
    return (
        <div class="hero min-h-screen bg-base-300 mb-6 mt-6">
            <div class="hero-content flex-col lg:flex-row">
                <img className='w-96' src={services.image} alt="" />
                <div>
                    <h2 class="text-5xl font-bold">{services.title}</h2>
                    <p className="text-xl mt-2">Price : ${services.price}</p>
                    <p className="text-xl mt-2">Rating: {services?.rating?.rate}</p>
                    <p class="py-6 text-sm text-black">{services.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Update;