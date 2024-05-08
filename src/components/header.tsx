import Image from 'next/image';
import logos from '@/assets/logos.png';
import React from 'react';
import Link from 'next/link';
import { FaUserPlus, FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 border-bottom border-blue-400 bg-white/75 flex justify-between px-4 items-center">

            <div className="flex flex-row items-center ">
                <Image src={logos} alt='logo site' width='60' height='60' />
                <div className='flex flex-col'>
                    <Link href=''>

                        <h1 className='text-4xl font-bold items-center text-blue-400'>
                            UTBC
                        </h1>
                        <p className='font-light text-xs text-black-400'>
                            bibliotheque Numérique
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <ul className='flex flex-row justify-between items-center' >
                    <li className='mx-2 p-1 text-blue-400'>
                        <Link href='/login' className='flex flex-col items-center text-3xl'>
                            <FaUser />
                            <h3 className='font-light text-[10px]'>Se Connecter</h3>
                        </Link>
                    </li>
                    <li className='mx-2 p-1 text-blue-400'>
                        <Link href='/register' className='flex flex-col items-center text-3xl'>
                            <FaUserPlus className='mr-0.5 ' />
                            <h3 className='font-light text-[10px]'>s&apos;inscrire</h3>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;