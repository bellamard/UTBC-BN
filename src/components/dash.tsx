import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaBookOpenReader, FaBook, FaHospital, FaScaleBalanced, FaLaptopCode, FaLandmark, FaTv } from 'react-icons/fa6';
dash.propTypes = {

};

function dash(props) {

    const { countBookDepartment } = props;
    const getCountDepartment = () => {
        return countBookDepartment.map((bookDepartment, key) => {
            const MyIcon = ({ name }) => {
                if (name === 'Informatique') {
                    return (<FaLaptopCode className='text-5xl ' />)
                }
                if (name === 'Droit') {
                    return (<FaScaleBalanced className='text-5xl ' />)
                }
                if (name === 'Economie') {
                    return (<FaLandmark className='text-5xl ' />)
                }
                if (name === 'Communication') {
                    return (<FaTv className='text-5xl ' />)
                }
                if (name === 'Medecine') {
                    return (<FaHospital className='text-5xl ' />)
                }
                return (<FaBookOpenReader className='text-5xl ' />);

            }

            const styleCss = (name) => {
                if (name === 'Informatique') {
                    return "w-[240px] border border-blue-800 p-2 justify-between rounded items-right mb-4 bg-gradient-to-br from-blue-500 to-blue-900";
                }
                if (name === 'Droit') {
                    return "w-[240px] border border-blue-800 p-2 justify-between rounded items-right mb-4 bg-gradient-to-br from-purple-400 to-purple-700";
                }
                if (name === 'Economie') {
                    return "w-[240px] border border-blue-800 p-2 justify-between rounded items-right mb-4 bg-gradient-to-br from-pink-500 to-purple-800";
                }
                if (name === 'Communication') {
                    return "w-[240px] border border-blue-800 p-2 justify-between rounded items-right mb-4 bg-gradient-to-br from-blue-600 to-pink-800";
                }
                if (name === 'Medecine') {
                    return "w-[240px] border border-blue-800 p-2 justify-between rounded items-right mb-4 bg-gradient-to-br from-blue-300 to-purple-900";
                }
                return "w-[240px] border border-blue-800 p-2 justify-between rounded items-right mb-4 bg-gradient-to-br from-blue-500 to-purple-600";

            }

            return (

                <div key={key} className={styleCss(bookDepartment.name)}>
                    <Link href={`dashboard/${bookDepartment.name}`}>
                        <div className='justify-between text-white'>
                            <div className='flex flex-row justify-between items-center'>
                                <MyIcon name={bookDepartment.name} />
                                <h3>
                                    {bookDepartment.name}

                                </h3>
                            </div>
                            <h4 className='flex justify-end items-right text-6xl text-yellow-400'>
                                {bookDepartment.counts}
                            </h4>
                        </div>
                    </Link>
                </div >

            );
        }
        )
    }


    return (
        <div className='w-full justify-center  text-blue-800 p-2 border-b border-blue-600'>
            <div>
                <div className='flex justify-between flex-wrap'>
                    {getCountDepartment()}
                </div>
            </div>
        </div>
    );
}

export default dash;