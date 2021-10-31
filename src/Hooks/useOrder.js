import { useEffect, useState } from "react";

const useOrder = () => {
    const [selectedService, setSelectedService] = useState([]);


    useEffect(() => {
        const tour = getTour();
        setSelectedService(tour);
    }, [])

    const getTour = () => {
        let tour;
        const isHave = localStorage.getItem("tour");
        if (isHave) {
            tour = JSON.parse(isHave);
        }
        else {
            tour = [];
        }
        return tour;
    }

    const addToOrder = (newService) => {
        const isHave = selectedService.find(selected => selected.id === newService.id);
        if (isHave) {
            alert("Already Purchased");
        }
        else {
            const newSelection = [...selectedService, newService];
            localStorage.setItem("tour", JSON.stringify(newSelection));
            setSelectedService(newSelection);
        }
    }

    const remove = (id) => {
        const selectAfterRemove = selectedService.filter((service) => service.id !== id);
        localStorage.setItem("tour", JSON.stringify(selectAfterRemove));
        setSelectedService(selectAfterRemove);
    }

    return { addToOrder, selectedService, remove, setSelectedService }
};

export default useOrder;