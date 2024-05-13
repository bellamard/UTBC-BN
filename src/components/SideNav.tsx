import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logos from '@/assets/logos.png';
import Image from 'next/image';
import '@/app/dashboard/dashboard.module.css';
import { FaBook, FaBookReader, FaSchool, FaStar, FaSignOutAlt } from "react-icons/fa";

const SideNav = () => {
    const [domaines, setDomaines] = useState([]);

    return (
        <div className="sticky top-0 flex flex-col justify-between p-2 bg-sky-500 h-screen w-[14%] text-white text-[18] font-light rounded-r">
            <div>
                <div className='flex justify-center mb-4'>
                    <Link href=''>
                        <Image src={logos} alt='logo site' width='90' height='90' />
                    </Link>
                </div>
                <div>
                    <ul className='list-none'>
                        <li className='p-2 border-b border-white-400/25 '>
                            <Link href="#" className='active:text-blue-400 hover:text-blue-900'>
                                <div className='flex v-middle'>
                                    <FaBookReader className='mr-4 text-3xl' />
                                    Mes lectures
                                </div>
                            </Link>
                        </li>
                        <li className='p-2 border-b border-white-400/25'>
                            <Link href="#" className='active:text-blue-400 hover:text-blue-900'>
                                <div className='flex'>
                                    <FaBook className='mr-4 text-3xl' />
                                    Nouveautes
                                </div>
                            </Link>
                        </li>
                        <li className='p-2 border-b border-white-400/25'>
                            <Link href='#' className='active:text-blue-400 hover:text-blue-900'>
                                <div className='flex'>
                                    <FaSchool className='mr-4 text-3xl' />
                                    DOMAINES
                                </div>
                            </Link>

                        </li>
                        <li className='p-2 border-b border-white-400/25'>

                            <Link href="#" className='active:text-blue-400 hover:text-blue-900'>
                                <div className=' flex'>
                                    < FaStar className='mr-4 text-3xl' />
                                    Favoris
                                </div>
                            </Link>


                        </li>
                    </ul>
                </div>

            </div>

            <div className='flex v-middle p-2 mt-8'>
                <FaSignOutAlt className='mr-4 text-3xl' />
                Deconnecter
            </div>

        </div>
    );
};

export default SideNav;