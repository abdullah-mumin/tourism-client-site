import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://infinite-crag-97882.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    // console.log(data);
    return {
        services,
        setServices
    }
};

export default useServices;