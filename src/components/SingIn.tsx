import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineCheck, AiFillEyeInvisible, AiFillEye, AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";
import { FaUser, FaLock } from "react-icons/fa";

const SingIn = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [saveUser, setSaveUser] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };
    const handleToggleSaveUser = () => {
        setSaveUser(!saveUser);
    };
    return (
        <div className='section justify-center' id='contact'>
            <div className='justify-center items-center w-3/4'>
                <div className="ml-4 mr-4 flex flex-col justify-center align-center w-full">
                    <h3 className='text-[48px] text-blue-800 font-bold border-b border-blue-600 mb-4'>
                        Se connecter
                    </h3>
                    <div className='rounded-[5px] flex flex-col  justify-center items-center w-full'>
                        <div className='rounded-[5px] bg-white/70 flex flex-row justify-between items-center w-full'>
                            <div className='flex flex-row p-2'>
                                
                                <div className='flex flex-col justify-center p-2'>
                                    <h3 className='text-[48px] text-blue-800 font-bold'>Avantage</h3>
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                        Vous pouvez accéder aux ressources de la bibliothèque numérique depuis n’importe où, tant que vous avez une connexion Internet. Plus besoin de vous rendre physiquement à la bibliothèque.
                                    </p>
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                        Contrairement aux bibliothèques traditionnelles, les bibliothèques numériques ne sont pas limitées par l’espace physique. Elles peuvent stocker un grand nombre de documents sans encombrer les étagères.
                                    </p>
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                        Les interfaces conviviales des bibliothèques numériques permettent des recherches rapides et ciblées. Vous pouvez trouver des informations spécifiques en quelques clics.
                                    </p>
                                </div>

                            </div>
                            <div className='bg-white/75 rounded-[5px] border-l-[2px] border-sky-500   ml-2 p-4 flex flex-col justify-center'>
                                <form>
                                    <div className='flex flex-row pb-2'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center'>
                                                <FaUser className='m-2' />
                                                <label htmlFor='userName'>Utilisateur:</label>
                                            </div>
                                            <input
                                                type='text'
                                                id='userName'
                                                value={userName}
                                                placeholder='Ilunga08'
                                                className='p-2 px-4 rounded rounded-full'
                                                onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-row pb-2'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center'>
                                                <FaLock className='m-2' />
                                                <label htmlFor='password'>Mot de passe:</label>
                                            </div>

                                            <div className='flex flex-row'>
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={password}
                                                    id='password' placeholder='*************'
                                                    className='p-2 px-4 mr-1 rounded rounded-full'
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button type="button" onClick={handleTogglePassword}>
                                                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    {/* sauve fonction users */}
                                    <div className='flex flex-row pb-2'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row'>

                                                <button type="button" onClick={handleToggleSaveUser} className='flex flex-row items-center'>
                                                    {saveUser ? <AiOutlineCheckSquare className='m-2' /> : <AiOutlineBorder className='m-2' />}
                                                    Se rappeler de moi sur cet appareil
                                                </button>

                                            </div>
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
                                    <div className='my-8'>
                                        <Link href='/recovery'>
                                            Mot de passe oublié
                                        </Link>

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