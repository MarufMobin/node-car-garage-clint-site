import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [ service, setService] = useState({});
    console.log(service)
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then( res => res.json())
        .then( data => setService(data))
    },[])
    return (
        <div style={{textAlign:"left", width: "50%", margin:"100px auto"}}>
            <h2>img: {service?.img}</h2>
            <h2>Price BD taka : {service?.price}</h2>
            <h2>details : {service?.description}</h2>
            <h2>{service?.name}</h2>
        </div>
    );
};

export default Booking;