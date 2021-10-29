import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useOrder from '../Hooks/useOrder';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();
    // const { addToOrder, selectedService, remove, setSelectedService } = useOrder();

    // const data = {
    //     addToOrder,
    //     selectedService,
    //     remove,
    //     setSelectedService,
    //     allContexts,
    // };

    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;