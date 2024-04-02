import React, { useState } from 'react';
import Image from 'next/image';
import illustration from '@/assets/logos.png'
import { AiOutlineCheck } from "react-icons/ai";

const SingIn = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };
    return (
        <div className='section justify-center' id='contact'>
            <div className='justify-center items-center'>
                <div className="ml-4 mr-4 flex flex-col justify-center align-center w-full">
                    <h3 className='text-[48px] text-blue-800 font-bold border-b border-blue-600 mb-4'>
                        Se connecter
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
                                    <div className='flex flex-row pb-2'>
                                        <div className='flex flex-col'>
                                            <label htmlFor='userName'>Nom:</label>
                                            <input 
                                            type='text' 
                                            id='userName' 
                                            value={userName} 
                                            placeholder='Votre Nom' 
                                            className='p-2 rounded rounded-full'
                                            onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-row pb-2'>
                                        <div className='flex flex-col'>
                                            <label htmlFor='password'>Mot de passe:</label>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                id='password' placeholder='Votre Mot de passe'
                                                className='p-2 rounded rounded-full'
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <button type="button" onClick={handleTogglePassword}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <button type='submit' className='w-full p-1 border border-sky-500 rounded-full  text-white flex items-center bg-gradient-to-r from-purple-500 to-pink-500/25 hover:bg-white hover:text-white/50'>
                                            <div className="p-3 mr-4 rounded-full bg-sky-500">
                                                <AiOutlineCheck />
                                            </div>
                                            <h3 className='text-xl '>
                                                Se Connecter
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

export default SingIn;