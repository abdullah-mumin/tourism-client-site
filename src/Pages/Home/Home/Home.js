import React from 'react';
import Award from '../../Award/Award';
import Choose from '../../Choose/Choose';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Choose></Choose>
            <Award></Award>
        </div >
    );
};

export default Home;