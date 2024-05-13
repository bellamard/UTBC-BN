'use client';
import React from 'react';
import HeaderDashboard from '@/components/headerDashboard';
import Dash from '@/components/dash';
import CountMemory from '@/components/countMemory';

const Home = () => {
    const countBookDepartment=[
        {counts:129, name:'Informatique'},
        {counts:429, name:'Droit'},
        {counts:329, name:'Economie'},
        {counts:929, name:'Communication'},
        {counts:929, name:'Medecine'},
    ]
    
    return (
        <div className='flex flex-col justify-between m-2 p-2 bg-gray-200  w-full flex-col flex-wrap rounded rounded-l '>
            <HeaderDashboard userName='bebe' path='DashBoard'/>
            <CountMemory countBook={139}/>
            <Dash countBookDepartment={countBookDepartment}/>            
        </div>
    );
};

export default Home;