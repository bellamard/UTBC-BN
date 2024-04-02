import Image from 'next/image';
import illustration from '@/assets/illustrat2.jpeg'


const About = () => {

    return (
        <div className='section justify-center' id='About'>
            <div className="ml-4 mr-4 p-8 flex flex-col justify-center align-center">
                
                <div className='flex flex-row justify-center'>
                    <div className='flex flex-row justify-center items- items-start'>
                        <Image src={illustration} alt="image de presentation du bibliotheque virtuel" width='360' className='rounded-xl border border-[4px] border-sky-500' />
                        <div className='bg-white/50 rounded-[5px] border-l-[2px] border-sky-500 w-1/2 h-full ml-2 p-4 flex flex-col justify-center'>
                            <h3 className='text-[48px] text-blue-800 font-bold border-b border-blue-600'>
                                À propos
                            </h3>
                            <p className='align-center text-black text-sm mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet sunt error suscipit ducimus incidunt harum assumenda. Ducimus perferendis in explicabo corrupti nam a, veritatis laboriosam repudiandae hic libero odio.
                            </p>

                            <p className='align-center text-black text-sm mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet sunt error suscipit ducimus incidunt harum assumenda. Ducimus perferendis in explicabo corrupti nam a, veritatis laboriosam repudiandae hic libero odio.
                            </p>
                            <p className='align-center text-black text-sm mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet sunt error suscipit ducimus incidunt harum assumenda. Ducimus perferendis in explicabo corrupti nam a, veritatis laboriosam repudiandae hic libero odio.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;