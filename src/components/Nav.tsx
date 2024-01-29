import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            
            <div className="container mx-auto">
                <div className='w-full bg-black/20 h-[60px] backdrop-blur-2-xl rounded-full max-w-[460] mx-auto px-5 flex justify-between items-center text-2xl text-red/50'>
                    <Link href={''} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        Home
                    </Link>
                    <Link href={''} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        Se connecter
                    </Link>
                    <Link href={''} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        A propos
                    </Link>
                    <Link href={''} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        Partenaires
                    </Link>
                    <Link href={''} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Nav;