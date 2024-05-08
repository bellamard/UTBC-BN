import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineCheck, AiFillEyeInvisible, AiFillEye, AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";
import { FaUser, FaLock } from "react-icons/fa";

const Recovery = () => {
    const [userEmail, setUserEmail] = useState('');
    
    return (
        <div className='section justify-center' id='contact'>
            <div className='justify-center items-center w-3/4'>
                <div className="ml-4 mr-4 flex flex-col justify-center align-center w-full">
                    <h3 className='text-[48px] text-blue-800 font-bold border-b border-blue-600 mb-4'>
                        Récuperer le mots de passe
                    </h3>
                    <div className='rounded-[5px] flex flex-col  justify-center items-center w-full'>
                        <div className='rounded-[5px] bg-white/70 flex flex-row justify-between items-center w-full'>
                            <div className='flex flex-row p-2'>
                                
                                <div className='flex flex-col justify-center p-2'>
                                    {/* <h3 className='text-[48px] text-blue-800 font-bold'>Avantage</h3> */}
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                       Entrez l&apos;adresse email que vous avez utilisée lors de votre inscription à la bibliothèque numérique.
                                    </p>
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                        Après avoir soumis votre adresse email, vérifiez votre boîte de réception. Vous devriez recevoir un email contenant un lien de réinitialisation de mot de passe.
                                    </p>
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                        Ouvrez l&apos;email et cliquez sur le lien fourni. Ce lien vous dirigera vers une page où vous pourrez saisir un nouveau mot de passe.
                                    </p>
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                        Sur la page de réinitialisation, saisissez un nouveau mot de passe. Assurez-vous qu&apos;il est sécurisé (combinant majuscules, minuscules, chiffres et caractères spéciaux).
                                    </p>
                                    <p className='mb-2 text-[16px] text-blue-800 font-light'>
                                        Une fois que vous avez confirmé le nouveau mot de passe, enregistrez-le. Vous devriez maintenant pouvoir vous connecter à votre compte de bibliothèque numérique avec ce nouveau mot de passe.
                                    </p>
                                </div>

                            </div>
                            <div className='bg-white/75 rounded-[5px] border-l-[2px] border-sky-500   ml-2 p-4 flex flex-col justify-center'>
                                <form>
                                    <div className='flex flex-row pb-2 mt-8'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center'>
                                                <FaUser className='m-2' />
                                                <label htmlFor='userName'>Votre Email:</label>
                                            </div>
                                            <input
                                                required
                                                type='email'
                                                id='Email'
                                                value={userEmail}
                                                placeholder='contact@belcampus.cd'
                                                className='p-2 px-4 rounded rounded-full'
                                                onChange={(e) => setUserEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    
                                    

                                    <div className='my-8'>
                                        <button type='submit' className='w-full p-1 border border-sky-500 rounded-full  text-white flex items-center bg-gradient-to-r from-purple-500 to-pink-500/25 hover:bg-white hover:text-white/50'>
                                            <div className="p-3 mr-4 rounded-full bg-sky-500">
                                                <AiOutlineCheck />
                                            </div>
                                            <h3 className='text-xl '>
                                                Soumettre
                                            </h3>
                                        </button>
                                    </div>
                                    <div className='my-8'>
                                        <Link href='/Login'>
                                            Aller sur SE CONNECTER
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

export default Recovery;