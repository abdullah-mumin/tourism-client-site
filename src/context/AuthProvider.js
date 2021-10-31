import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useOrder from '../Hooks/useOrder';
// import useOrder from '../Hooks/useOrder';
import useServices from '../Hooks/useServices';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();
    const { services, setServices } = useServices();
    const { selectedService, addToOrder, remove, setSelectedService } = useOrder();

    const data = {
        setSelectedService,
        remove,
        addToOrder,
        services,
        setServices,
        selectedService,
        allContexts,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// , selectedService, remove, setSelectedService