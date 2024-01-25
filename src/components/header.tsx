import Image from 'next/image';
import logos from '../images/logos.png';
import React from 'react';

const Header = () => {
    return (
        <div className="bg-yellow-600 p-4 border-2 border-b-red-600">
            <div className='flex flex-row'>
                <Image
                    src={logos}
                    alt='logos de Utbc Bibliotheque Numérique'
                    width='90'
                    height='90'
                />
                <div className='flex flex-col'>
                    <h1 className='text-2xl'>
                        UTBC
                    </h1>
                    <span className='capitalize'>
                        BIBLIOTHEQUE NUMERIQUE
                    </span>
                </div>


            </div>
            <div>
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default Header;