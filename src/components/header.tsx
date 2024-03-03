import Image from 'next/image';
import logos from '@/assets/logos.png';
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="border-bottom border-blue-400 bg-white/75 flex justify-between px-4 items-center">

            <div className="flex flex-row items-center ">
                <Image src={logos} alt='logo site' width='60' height='60' />
                <div className='flex flex-col'>
                    <Link href=''>

                        <h1 className='text-4xl font-bold items-center text-yellow-400'>
                            UTBC
                        </h1>
                        <p className='font-light text-xs text-blue-400'>
                            bibliotheque Numérique
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <ul className='flex flex-row justify-between' >
                    <li className='mx-2 p-1 text-blue-400'><Link href=''>se connecter</Link></li>
                    <li className='mx-2 p-1 text-blue-400'><Link href=''>s&apos;inscrire</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;