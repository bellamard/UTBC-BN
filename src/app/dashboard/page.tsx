'use client';
import React from 'react';
import HeaderDashboard from '@/components/headerDashboard';
import Dash from '@/components/dash';

const Home = () => {
    const countBookDepartment=[
        {counts:129, name:'Informatique'},
        {counts:429, name:'Droit'},
        {counts:329, name:'Economie'},
        {counts:929, name:'Medecine'},
    ]
    
    return (
        <div className='m-4 p-2 bg-gray-200 w-full flex-col rounded rounded-l'>
            <HeaderDashboard name='bebe' path='DashBoard'/>
            <Dash countBook={139} countBookDepartment={countBookDepartment}/>
            
        </div>
    );
};

export default Home;