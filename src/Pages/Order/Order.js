import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import { useForm } from 'react-hook-form';
import './Order.css';
import useAuth from '../../Hooks/useAuth';
import useOrder from '../../Hooks/useOrder';


const Order = () => {
    const { reset } = useForm();

    const { id } = useParams();
    const { services, allContexts, addToOrder } = useAuth();
    const { user } = allContexts;
    const history = useHistory();
    const newService = services?.find((service) => service.id === Number(id));
    const [singleOrder, setSinglrOrder] = useState({});

    const handleInputs = (e) => {

    }

    const handleSubmit = e => {
        e.preventDefault();
        alert('This feature is Under Development');
    };

    useEffect(() => {
        if (services.length > 0) {
            const remainingData = services.find(order => order.id == id);
            setSinglrOrder(remainingData);
            reset(remainingData);
        }
    }, [services, reset]);

    return (
        <div className="container my-5">
            <div className="row gx-4">
                <div className="text-center col-lg-7 col-sm-12">
                    {
                        newService?.pName ?
                            <div className="card mb-4">
                                <img src={newService?.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Place: {newService?.pName}</h5>
                                    <h5 className="card-title">Price: {newService?.price}৳</h5>
                                    <p className="card-text">{newService?.description}</p>
                                    <div className="row ">
                                        <div className="text-center">
                                            <button onClick={() => addToOrder(newService)} className="btn btn-primary px-5" type="button">Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="my-5 py-5">
                                <h5 className="fw-bold fs-1 my-4">No Service Found!</h5>
                            </div>
                    }
                </div>
                <div className="order-form col-lg-5 col-sm-12">
                    <div className="ms-5">
                        <form onSubmit={handleSubmit}>

                            <input defaultValue={user?.displayName} onChange={handleInputs} name="name" required />
                            <input defaultValue={user?.email} onChange={handleInputs} name="email" required />
                            <input placeholder="Address" onChange={handleInputs} name="address" required />
                            <input placeholder="City" onChange={handleInputs} name="city" required />
                            <input placeholder="phone number" onChange={handleInputs} name="phone" required />
                            <input defaultValue={singleOrder?.pName} onChange={handleInputs} name="pName" />

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Order;