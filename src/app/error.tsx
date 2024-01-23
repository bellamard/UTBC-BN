import React, { useEffect } from 'react';
'use client';

const Error = ({ error, reset }: { error: Error; reset:()=>void}) => {

    useEffect(()=>{
        console.log(error)
    },[error])

    return (
        <div>
            <h2>
                something went wring!
            </h2>
            <button onClick={()=>reset()}>
                try again ded
            </button>

        </div>
    );
};

export default Error;