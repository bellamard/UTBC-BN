import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import illustration from '@/assets/logos.png'
import { AiOutlineCheck, AiFillEyeInvisible, AiFillEye, AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";
import { FaUser, FaLock, FaEnvelope, FaMobile } from "react-icons/fa";

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
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
                        S&apos;enregistrer
                    </h3>
                    <div className='rounded-[5px] flex flex-col  justify-center items-center w-full'>
                        <div className='rounded-[5px] bg-white/70 flex flex-row justify-between items-center w-full'>
                            <div className='flex flex-row p-2'>
                                {/* <Image src={illustration} alt="image de presentation du bibliotheque virtuel" width='200' /> */}
                                <form>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-col mr-2'>
                                            <div className='flex flex-row items-center'>
                                                <FaUser className='m-2' />
                                                <label htmlFor='userName'>Prénom & Nom:</label>
                                            </div>
                                            <input
                                                required
                                                type='text'
                                                id='userName'
                                                value={userName}
                                                placeholder='Erick Ilunga'
                                                className='p-2 px-4 rounded rounded-full'
                                                onChange={(e) => setUserName(e.target.value)} />
                                        </div>

                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center'>
                                                <FaUser className='m-2' />
                                                <label htmlFor='userName'>Pseudo:</label>
                                            </div>
                                            <input
                                                required
                                                type='text'
                                                id='userSurname'
                                                value={userSurname}
                                                placeholder='Ilunga08'
                                                className='p-2 px-4 rounded rounded-full'
                                                onChange={(e) => setUserSurname(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between my-4'>
                                        <div className='flex flex-col mr-1 '>
                                            <div className='flex flex-row items-center'>
                                                <FaLock className='m-2' />
                                                <label htmlFor='password'>Mot de passe:</label>
                                            </div>

                                            <div className='flex flex-row'>
                                                <input
                                                    required
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
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center'>
                                                <FaLock className='m-2' />
                                                <label htmlFor='confirmPassword'>Confirmé:</label>
                                            </div>
                                            <div className='flex flex-row'>
                                                <input
                                                    required
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={confirmPassword}
                                                    id='confirmPassword' placeholder='*************'
                                                    className='p-2 px-4 mr-1 rounded rounded-full'
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between my-4'>
                                        <div className='flex flex-col mr-1 '>
                                            <div className='flex flex-row items-center'>
                                                <FaEnvelope className='m-2' />
                                                <label htmlFor='email'>E-mail:</label>
                                            </div>

                                            <div className='flex flex-row'>
                                                <input
                                                    required
                                                    type='email'
                                                    value={userEmail}
                                                    id='email' placeholder='contact@belcampus.cd'
                                                    className='p-2 px-4 mr-1 rounded rounded-full'
                                                    onChange={(e) => setUserEmail(e.target.value)}
                                                />                                               

                                            </div>

                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center'>
                                                <FaMobile className='m-2' />
                                                <label htmlFor='phone'>Téléphone:</label>
                                            </div>
                                            <div className='flex flex-row'>
                                                <input
                                                    required
                                                    type='number'
                                                    value={userPhone}
                                                    id='phone' placeholder='00243 XXX XXX XXX'
                                                    className='p-2 px-4 mr-1 rounded rounded-full'
                                                    onChange={(e) => setUserPhone(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                    </div>


                                    <div className='flex justify-end'>
                                        <button type='submit' className='p-1 py-2 border border-sky-500 rounded-full  text-white flex items-center bg-gradient-to-r from-purple-500 to-pink-500/25 hover:bg-white hover:text-white/50'>
                                            <div className="p-3 mr-4 rounded-full bg-sky-500">
                                                <AiOutlineCheck />
                                            </div>
                                            <h3 className='text-xl '>
                                                Valider
                                            </h3>
                                        </button>
                                    </div>

                                </form>

                            </div>
                            <div className='bg-white/75 rounded-[5px] border-l-[2px] border-sky-500   ml-2 p-16 flex flex-col justify-center'>
                                <Image src={illustration} alt="image de presentation du bibliotheque virtuel" width='200' />

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Register;