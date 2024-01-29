import Image from 'next/image';
import logos from '@/assets/logos.png';
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="bg-pink-600 flex justify-between px-4 items-center">

            <div className="flex flex-row items-center ">
                <Image src={logos} alt='logo site' width='60' height='60' />
                
                <h1 className='text-lg font-bold items-center'>
                    UTBC
                    <span className='font-light text-xs'>
                        bibliotheque Numérique
                    </span>
                </h1>

            </div>
            <div>
                <ul className='flex flex-row justify-between' >
                    <li className='mx-2 p-1'><Link href=''>se connecter</Link></li>
                    <li className='mx-2 p-1'><Link href=''>s&apos;inscrire</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;