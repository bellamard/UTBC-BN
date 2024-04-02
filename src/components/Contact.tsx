import React from 'react';
import Image from 'next/image';
import illustration from '@/assets/logos.png'
import { AiFillEdit } from "react-icons/ai";

const Contact = () => {
    return (
        <div className='section justify-center' id='contact'>
            <div className='justify-center items-center'>
                <div className="ml-4 mr-4 flex flex-col justify-center align-center">
                    <h3 className='text-[48px] text-blue-800 font-bold border-b border-blue-600 mb-4'>
                        Contact
                    </h3>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-center items- items-center'>
                            <div>
                                <Image src={illustration} alt="image de presentation du bibliotheque virtuel" width='200' />
                                <div className='flex justify-center'>
                                    <address>
                                        Tel: +243 XXX XXX XXX <br />
                                        8éme rue, Industriel<br />
                                        Kinshasa | Limete
                                    </address>
                                </div>

                            </div>
                            <div className='bg-white/50 rounded-[5px] border-l-[2px] border-sky-500  h-full ml-2 p-4 flex flex-col justify-center'>
                                <form>
                                    <div className='flex flex-row'>
                                        <div className='flex flex-col'>
                                            <label>Nom:</label>
                                            <input type='text' placeholder='Votre Nom' className='p-2 rounded rounded-full'/>
                                        </div>
                                        <div className='pl-2 flex flex-col'>
                                            <label>E-mail:</label>
                                            <input type='email' placeholder='Votre adresse Courriel' className='p-2 rounded rounded-full' />
                                        </div>
                                    </div>

                                    <div className='pb-2 flex flex-col'>
                                        <label>Message:</label>
                                        <textarea placeholder='Votre Message' className='p-2 rounded rounded-l'/>
                                    </div>
                                    <div>
                                        <button type='submit' className='p-1 border border-sky-500 rounded-full  text-white flex items-center bg-gradient-to-r from-purple-500 to-pink-500/25 hover:bg-white hover:text-white/50'>
                                            <div className="p-3 mr-4 rounded-full bg-sky-500">
                                                <AiFillEdit />
                                            </div>                                            
                                            <h3 className='text-xl'>
                                                Envoyer
                                            </h3>
                                        </button>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Contact;