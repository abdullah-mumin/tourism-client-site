import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;

    const history = useHistory();

    const handleDetails = (id) => {
        // console.log(id);
        const uri = `details/${id}`;
        history.push(uri);
    }


    return (
        <div className="col-lg-4">
            <div className="card mb-4">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Place: {name}</h5>
                    <h5 className="card-title">Price: {price}৳</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button onClick={() => handleDetails(id)} className="btn btn-primary" type="button">Check Details</button>
                    </div>
                </div>
            </div>
        </div>

        // <div classNameName="col-lg-4 col-sm-6 col-12">
        //     <div classNameName="border border-1 border-primary mb-4 service">
        //         <img classNameName="center mt-2" style={{ height: '210px', borderRadius: '10px' }} src={img} alt="" />
        //         <p classNameName="fw-bold fs-3">Name: {name}</p>
        //         <h5>Details: {description.substr(0, 90)}</h5>
        //         <button type="button" classNameName="btn btn-primary mb-2 opacity-75">See More Details</button>
        //     </div>
        // </div>
    );
};

export default Service;