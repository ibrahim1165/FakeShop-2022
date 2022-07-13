import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseProduct from '../../Hooks/UseProduct';
import Fade from 'react-reveal/Fade';
const Update = () => {
    const { id } = useParams()
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    const [services, setServices] = UseProduct(id)
    return (
        <div ref={myRef} class="hero min-h-screen bg-base-300 mb-6 mt-6">
            <div class="hero-content flex-col lg:flex-row">
                <Fade left>
                    <img className='w-96 h-96' src={services.image} alt="" />
                </Fade>
                <div>
                    <Fade right>
                        <h2 class="text-5xl font-bold">{services.title}</h2>
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