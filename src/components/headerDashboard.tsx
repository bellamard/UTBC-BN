import React from 'react';
import PropTypes from 'prop-types';

headerDashboard.propTypes = {

};

function headerDashboard(props) {
    return (
        <div>
            <div className='flex justify-between items-center border-b border-blue-600 '>
                <h3 className='font-light'>
                    {props.path}
                </h3>
                <div className='pt-4 pb-2 flex justify-end items-center'>
                    <h3 className='font-bold text-6xl'>
                        Bonjour! {props.userName}
                    </h3>
                </div>
            </div>

        </div>
    );
}

export default headerDashboard;