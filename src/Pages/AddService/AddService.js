import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
         console.log(data)
         axios.post('http://localhost:5000/services', data)
         .then( res =>{
            //   console.log(res)
            if(res.data.insertedId){
                alert("added Successfully Done");
                reset( );
            }
            })
        };
        
    return (
        <div className="add-Service">
            <h3>Add service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter You name" />
                <textarea {...register("description")} placeholder="Enter your Self" />
                <input type="number" {...register("price")} placeholder="Enter Your Amount" />
                <input {...register("img")} placeholder="Enter Your image Url" />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;