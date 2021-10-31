import React from 'react';
import PageNotFound from '../../images/404/404.png';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="img-fluid" src={PageNotFound} alt="" />
        </div>
    );
};

export default NotFound;