import React, { useEffect, useState } from 'react';

const UseProduct = id => {
    const [services,setServices] = useState({})
    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${id}`
        fetch(url).then(res => res.json())
        .then(data => setServices(data))
    }, [id])
    return [services, setServices]
    
};

export default UseProduct;