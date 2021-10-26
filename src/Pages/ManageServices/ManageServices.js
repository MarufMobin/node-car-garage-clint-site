import React, { useEffect, useState } from 'react';
import './ManageServices.css'
import Service from './Service/Service';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then( res => res.json())
            .then( data => setServices(data));
    },[])

    return (
        <div>
            <h3>This is Manage Services </h3>
             <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
             {
                    services.map( service => <Service key={service?._id} service={service}></Service> )
                }
             </div>
        </div>
    );
};

export default ManageServices;