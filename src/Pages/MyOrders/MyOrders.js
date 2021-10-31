import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { selectedService, remove, setSelectedService } = useAuth();

    const history = useHistory();

    const totalPrice = selectedService.reduce((total, service) => total + service.price, 0);

    return (
        <div className="my-4 container">
            {selectedService.length ? <div className="row">
                <div className="col-8">
                    {
                        selectedService.map((service) => {
                            const { key, id, img, pName, description, price, data } = service;
                            return (
                                <div key={key} className="row border border-4 border-info rounded-3 mb-3">
                                    <div className="col-4 d-flex align-items-center">
                                        <img className="img-fluid" src={img} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <div>
                                            <h5 className="card-title fw-bolder fs-2">{pName}</h5>
                                        </div>
                                        <div>
                                            <p className="card-text">{description.slice(0, 150)}</p>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-7">
                                                <p className="mb-0 fw-bold">Price: {price}৳</p>
                                                <p className="fw-bold">Stay in: {data}</p>
                                            </div>
                                            <div className="col-5">
                                                <button onClick={() => remove(id)} className="btn btn-primary px-5" type="button">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-4 text-center">
                    <div className="text-center">
                        <h2 className="fw-bolder">Total Tours Purchase</h2>
                        <p className="fw-bold fs-5">Count: {selectedService.length}</p>
                    </div>
                    <div>
                        <p className="fw-bold fs-5">Total Price: {totalPrice}৳</p>
                    </div>
                    <div>
                        <button onClick={() => {
                            alert('Thanks for Purchasing');
                            setSelectedService([]);
                            history.push("/home");
                        }} className="btn btn-primary px-5" type="button">Check Out</button>
                    </div>
                </div>
            </div> :
                <div className="text-center my-5 py-5">
                    <p className="fw-bold fs-1">No Tour  Selected</p>
                </div>
            }
        </div>
    );
};

export default MyOrders;