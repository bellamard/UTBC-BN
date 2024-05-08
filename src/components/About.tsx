import Image from 'next/image';
import illustration from '@/assets/illustrat2.jpeg'


const About = () => {

    return (
        <div className='section justify-center' id='About'>
            <div className="ml-4 mr-4 p-8 flex flex-col justify-center align-center">

                <div className='flex flex-row justify-center'>
                    <div className='flex flex-row justify-center items- items-start'>
                        <Image src={illustration} alt="image de presentation du bibliotheque virtuel" width='360' className='rounded-xl border border-[4px] border-sky-500' />
                        <div className='bg-white/75 rounded-[5px] border-l-[2px] border-sky-500 w-1/2 h-full ml-2 p-4 flex flex-col justify-center'>
                            <h3 className='text-[48px] text-blue-800 font-bold border-b border-blue-600'>
                                À propos
                            </h3>
                            <p className='align-center text-[16px] text-blue-800 font-light mb-4'>
                                La Bibliothèque Numérique de l&apos;Université Technologique BelCampus est un espace virtuel dédié à la découverte, à la recherche et à l&apos;apprentissage. Notre mission est de fournir un accès facile et rapide aux ressources académiques et culturelles pour les étudiants, les chercheurs et la communauté universitaire.
                            </p>

                            <p className='align-center text-[16px] text-blue-800 font-light mb-4'>
                                Accédez à des milliers de livres électroniques sur une variété de sujets. Que vous soyez passionné de littérature, de sciences sociales ou de technologie, vous trouverez des ressources pertinentes ici.
                            </p>
                            <p className='align-center text-[16px] text-blue-800 font-light mb-4'>
                               Utilisez notre moteur de recherche avancée pour trouver des documents spécifiques. Filtrer par auteur, date, sujet et plus encore.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;