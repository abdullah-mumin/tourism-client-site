import React from 'react';
import Service from '../Service/Service';
import useAuth from '../../Hooks/useAuth';


const Services = () => {
    const { services } = useAuth();
    // const { services } = allContexts;

    return (
        <div className="mt-lg-4 text-center">
            <h2>Our Tour Packages</h2>
            <div className="container">
                <div className="row mt-4">
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;