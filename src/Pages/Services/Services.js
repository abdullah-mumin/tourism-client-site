import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = '/travels.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="mt-lg-4">
            <h2>Our Tour Packages</h2>
            <div className="container">
                <div className="row mt-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;