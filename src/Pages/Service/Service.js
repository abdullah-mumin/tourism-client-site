import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, pName, price, description, img } = service;

    const history = useHistory();

    const handleOrder = (id) => {
        const uri = `/order/${id}`;
        history.push(uri);
    }


    return (
        <div className="col-lg-4 text-center">
            <div className="card mb-4">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Place: {pName}</h5>
                    <h5 className="card-title">Price: {price}৳</h5>
                    <p className="card-text">{description}</p>
                    <div className="row ">
                        <div className="text-center">
                            <button onClick={() => handleOrder(_id)} className="btn btn-primary px-4" type="button">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;