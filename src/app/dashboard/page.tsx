'use client';
import React from 'react';
import HeaderDashboard from '@/components/headerDashboard';
import Dash from '@/components/dash';
import CountMemory from '@/components/countMemory';
import Pannel from '@/components/pannel';
import image from '@/assets/SCN_0004.jpg'

const Home = () => {
    const countBookDepartment = [
        { counts: 129, name: 'Informatique' },
        { counts: 429, name: 'Droit' },
        { counts: 329, name: 'Economie' },
        { counts: 929, name: 'Communication' },
        { counts: 929, name: 'Medecine' },
    ];
    const memories = [
        {
            title: 'Nouveaute',
            memory: [
                {
                    matricule: 'ec08123',
                    title: 'developpement du marche du Numerique en RDC',
                    year: '2019-2020',
                    image: image
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du Boursier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du Boursier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du routier en RDC',
                    year: '2019-2020'
                }

            ]
        },
        {
            title: 'Favories',
            memory: [
                {
                    matricule: 'ec08123',
                    title: 'developpement du marche du Numerique en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du Boursier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du Boursier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du routier en RDC',
                    year: '2019-2020'
                }

            ]
        },
        {
            title: 'Populaire',
            memory: [
                {
                    matricule: 'ec08123',
                    title: 'developpement du marche du Numerique en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du Boursier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du Boursier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du routier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du Boursier en RDC',
                    year: '2019-2020'
                },
                {
                    matricule: 'ec08124',
                    title: 'developpement du marche du routier en RDC',
                    year: '2019-2020'
                }
            ]
        },
        

    ]

    return (
        <div className='flex flex-col justify-between m-2 p-2 bg-gray-200  w-full flex-col flex-wrap rounded rounded-l '>
            <HeaderDashboard userName='bebe' path='DashBoard' />
            <CountMemory countBook={1060} />
            <Dash countBookDepartment={countBookDepartment} />
            {
                memories.map((category, index) => (
                    <Pannel memories={category} key={index} />
                ))
            }

        </div>
    );
};

export default Home;