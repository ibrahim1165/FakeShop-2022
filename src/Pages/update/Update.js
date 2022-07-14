import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseProduct from '../../Hooks/UseProduct';
import Fade from 'react-reveal/Fade';
const Update = () => {
    const { id } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
    const [services, setServices] = UseProduct(id)
    return (
        <div class="hero min-h-screen bg-base-300">
            <div class="hero-content flex-col lg:flex-row">
                <Fade left>
                    <img className='w-96 h-96' src={services.image} alt="" />
                </Fade>
                <div>
                    <Fade right>
                        <h1 class="text-4xl font-bold">{services.title}</h1>
                        <p className="text-xl mt-2">Price : ${services.price}</p>
                        <p className="text-xl mt-2">Rating: {services?.rating?.rate}</p>
                        <p class="py-6 text-sm text-black">{services.description}</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Update;