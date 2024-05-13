import React from 'react';
import PropTypes from 'prop-types';
import { FaBook } from 'react-icons/fa';

countMemory.propTypes = {

};

function countMemory(props) {
    const { countBook } = props;

    return (
        <div className='backgroundBanner'>
            <div className='flex flex-row justify-center items-center border-b pb-2'>
                <FaBook className='text-2xl' />
                <h3 className='text-xl font-font-light'>
                    Memoires
                </h3>
            </div>
            <div className='flex justify-center items-right'>
                <h3 className='titleBanner'>
                    {countBook}
                </h3>

            </div>
        </div>
    );
}

export default countMemory;