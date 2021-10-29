import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useOrder from '../../Hooks/useOrder';

const MyOrders = () => {

    const { user } = useAuth();
    const { selectedService, setSelectedService, remove } = useOrder();
    const { uid } = user;
    const history = useHistory();



    return (
        <div>
            <h2>All Orders</h2>
            {selectedService.map((service) => {
                const { id, name, price, data, description, img } = service;
                return (
                    <div key={id} className="container p-4" style={{ width: "500px" }}>
                        <div className="card" style={{ height: "520px" }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">{name}</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-4 fw-bold">
                                        <p>Price: {price}৳</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-4 fw-bold">
                                        <p>{data}</p>
                                    </div>
                                </div>
                                <p className="card-text">{description}</p>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button onClick={() => remove(id)}
                                        className="btn btn-primary" type="button">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default MyOrders;