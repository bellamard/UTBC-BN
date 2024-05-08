import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Console } from 'console';

dash.propTypes = {

};

function dash(props) {

    const {countBook, countBookDepartment}= props;
    const getCountDepartment = () => {
        return countBookDepartment.map((bookDepartment,id)=>
            {
                
                return(
                    <div key={id}>
                        <div>
                            <h3>
                                {bookDepartment.counts}
                            </h3>
                            <h4>
                                {bookDepartment.name}
                            </h4>
                        </div>
                        
                    </div>
                );
            }
        )
    }
    

    return (
        <div>
            <div>
                <div>
                    <h3>
                        {countBook} : Memoires
                    </h3>
                </div>

                <div>
                    {getCountDepartment()}
                </div>
            </div>
        </div>
    );
}

export default dash;