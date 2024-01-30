import Link from 'next/link';
import React from 'react';
import { AiFillHome, AiFillNotification, AiOutlineUser, AiFillMessage } from "react-icons/ai"
import { FaGlassCheers } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">

            <div className="container mx-auto">
                <div className='w-3/4 bg-black/20 h-[60px] backdrop-blur-2-xl rounded-full max-w-[460] mx-auto px-5 flex justify-between items-center text-2xl text-red/50'>
                    <Link href={''} className='mx-2 cursor-pointer h-[60px] flex items-center justify-center flex flex-col text-xs text-white'>
                        <AiFillHome className='text-4xl'/>
                        Home
                    </Link>
                    <Link href={''} className='cursor-pointer h-[60px] flex items-center justify-center flex flex-col text-xs text-white'>
                        <AiOutlineUser className='text-4xl'/>
                        Se connecter
                    </Link>
                    <Link href={''} className='cursor-pointer h-[60px] flex items-center justify-center flex flex-col text-xs text-white'>
                        <AiFillNotification className='text-4xl'/>
                        A propos
                    </Link>
                    <Link href={''} className='cursor-pointer h-[60px] flex items-center justify-center flex flex-col text-xs text-white'>
                        <FaGlassCheers className='text-4xl'/> 
                        Partenaires
                    </Link>
                    <Link href={''} className='cursor-pointer h-[60px] flex items-center justify-center flex flex-col text-xs text-white'>
                        <AiFillMessage className='text-4xl'/>
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Nav;