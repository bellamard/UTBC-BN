import React from 'react';
import PropTypes from 'prop-types';

headerDashboard.propTypes = {

};

function headerDashboard(props) {
    return (
        <div>
            <h3 className='font-bold text-6xl'>
                Bonjour! {props.name}
            </h3>
            {/* tailwindcss pour  line-height: 0.4px;*/}
            <hr className='pb-2'/>
            <h3 className='font-light'>
                {props.path}
            </h3>
        </div>
    );
}

export default headerDashboard;