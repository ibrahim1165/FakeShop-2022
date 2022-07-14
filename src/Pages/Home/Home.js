import React, { useEffect } from 'react';
import Carousal from './Carousel';
import Services from './product/Services';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Carousal />
            <Services />
        </div>
    );
};

export default Home;