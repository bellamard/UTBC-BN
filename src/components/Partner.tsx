import React from 'react';
import Image from 'next/image';
import yali from '@/assets/yali.jpg';
import jci from '@/assets/jci.png';
import ccbc from '@/assets/ccbc-removebg-preview.png';
import ibem from '@/assets/ibem.png';
import belcampus from '@/assets/bel-campus-4-removebg-preview.png';

const Partner = () => {
    return (
        <div className='section justify-center' id='Partner'>
            <div className="ml-4 mr-4 p-8 flex flex-col justify-center align-center">
                <div className='flex flex-row justify-center items-center'>
                    <div className='flex flex-col items-center text-white font-light text-[13px] w-[164px] m-2'>
                        <Image src={belcampus} alt='belCampus' width='160' height='120'/>
                        
                    </div>

                    <div className='flex flex-col items-center text-white font-light text-[13px] w-[164px] m-2'>
                        <Image src={jci} alt='jci RDC' width='160' height='120'/>
                        
                    </div>

                    <div className='flex flex-col items-center text-white font-light text-[13px] w-[164px] m-2'>
                        <Image src={yali} alt='yali RDC' width='160' height='120'/>
                        
                    </div>
                    <div className='flex flex-col items-center text-white font-light text-[13px] w-[164px] m-2'>
                        <Image src={ibem} alt='ibem' width='160' height='120'/>
                        
                    </div>
                    <div className='flex flex-col items-center text-white font-light text-[13px] w-[164px] m-2'>
                        <Image src={ccbc} alt='centre culture bel campus' width='160' height='120'/>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Partner;