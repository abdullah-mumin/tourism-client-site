import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useFirebase from './useFirebase';

const useOrder = () => {
    const [selectedService, setSelectedService] = useState([]);
    const { user } = useFirebase();
    const { uid } = user;

    useEffect(() => {
        const url = `/travels.json/myOrder/${uid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedService(data);
                }
            })
    }, [uid]);

    function addToOrder(service) {
        const isHave = selectedService.find((selected) => selected.id === service.id);
        delete service.id;
        service.uid = uid;
        service.status = "Pending";
        if (isHave) {
            alert('Order has been added!');
        }
        else {
            fetch("/travels.json")
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedService, service];
                        setSelectedService(newSelection);
                    }
                });
        }
    }

    function remove(id) {
        const uri = `/travels.json/delete/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const selectAfterRemove = selectedService.filter((service) => service.id !== id);
                    setSelectedService(selectAfterRemove);
                }
                else {
                    alert('Something went Wrong!');
                }
            });
    }

    return {
        setSelectedService,
        remove,
        addToOrder,
        selectedService
    };
};

export default useOrder;