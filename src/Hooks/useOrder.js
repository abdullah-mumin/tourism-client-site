import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useOrder = () => {
    const { user } = useFirebase();
    const { uid, displayName, email } = user;
    const [selectedService, setSelectedService] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedService(data);
                }
            })
    }, [uid])




    const addToOrder = (service) => {
        const isHave = selectedService.find(selected => selected._id === service._id);

        delete service._id;
        service.uid = uid;
        service.name = displayName;
        service.email = email;
        service.status = "Pending";

        if (isHave) {
            alert("Already Purchased");
        }
        else {
            fetch("http://localhost:5000/service/add", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(service),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedService, service];
                        setSelectedService(newSelection);
                    }
                })
        }
    }

    const remove = (id) => {
        const confarmation = window.confirm('Are you sure  you want to delete!');
        if (confarmation) {
            fetch(`http://localhost:5000/remove/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const selectAfterRemove = selectedService.filter((service) => service._id !== id);
                        setSelectedService(selectAfterRemove);
                    }
                    else {
                        alert('Something went wrong!');
                    }
                })
        }
    }

    return { addToOrder, selectedService, remove, setSelectedService }
};

export default useOrder;