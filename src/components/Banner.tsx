import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logos.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='section flex flex-row justify-between items-center'>
            <div className='flex flex-col m-8 items-center w-full h-full '>
                <div className="flex flex-col py-2">
                    <h2 className='text-[64px] font-bold text-blue-600'>
                        Bienvenu(e)
                    </h2>
                    <h3 className='text-[42px]'>
                        dans la Bibliotheques Numérique

                    </h3>
                    <p>
                        de l&apos;Universitaire Technologique BelCampus
                    </p>
                </div>
                <div className='my-2 w-full flex'>
                    <Link href='' className='p-2 borded borded-2 rounded-full bg-red-600 text-[#ffff] text-[24px]'>
                        s&apos;inscrire
                    </Link>
                </div>
            </div>
            <div className='m-8 items-center w-full h-full justify-justify-center flex items-center'>
                <Image src={logo} alt='logo' width='360' height='0' />
            </div>
        </div>
    );
};

export default Banner;