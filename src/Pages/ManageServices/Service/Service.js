import React, { useEffect, useState } from 'react';

const Service = (props) => {

    const { name, description, img, price,_id } = props.service;

    const [ isLoaded , setIsLoaded ] = useState('null');
    
    const handleDelete = (id) =>{
        
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: "DELETE"
        }).then(res => res.json()).then( data => {
            
            if(data.deletedCount){
                setIsLoaded(true)
            }
        })

    }
  
    return (
        <div style={{}}>
            <h3>{name}</h3>
            <h3>{description}</h3>
            <h3>{img}</h3>
            <h3>{price}</h3>
            <button onClick={ () => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default Service;