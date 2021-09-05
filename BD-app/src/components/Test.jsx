import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {

    const[bob, setBob] = useState([]);


   useEffect(() =>{
       console.log('gjhkhkhkhjhkjhk')
        axios.get('http://localhost:8000/')
        .then(res =>{
            console.log('i need a response', res);
            setBob(res.data);
        })
   });
    return (
        <>
           <h1>welcome</h1>
           <p></p>
        </>
    );
};

export default Test;