import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useOrder from '../../Hooks/useOrder';

const Details = () => {
    const { id } = useParams();
    // console.log(id);
    // const { detail, setDetail } = useState({});
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});
    const { user } = useAuth();
    const { addToOrder } = useOrder()
    // const { user } = allContext;
    const { uid } = user;

    const history = useHistory();
    // console.log(key);

    useEffect(() => {
        const uri = '/travels.json';
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data);

            });
    }, []);

    // useEffect(() => {
    //     const uri = `/travels.json/details/${id}`;
    //     fetch(uri)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.id) {
    //                 // console.log(data);
    //                 setDetail(data);
    //             }
    //             else {
    //                 alert('Something went Wrong!');
    //             }
    //             // console.log(data);
    //         });
    // }, [id]);
    // console.log(details);

    useEffect(() => {
        if (details.length > 0) {
            const machingData = details.find(detail => detail.id == id)
            // console.log(machingData);
            setSpecificDetail(machingData);
        }
    }, [details]);

    // const handleOrder = (id) => {
    //     // const uri = `/order/${id}`;
    //     // history.push(uri);
    //     // console.log(id);
    // }


    return (
        <div>
            <div className="container p-4" style={{ width: "500px" }}>
                <div className="card" style={{ height: "520px" }}>
                    <img src={specificDetail?.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">{specificDetail?.name}</h5>
                        <div className="row">
                            <div className="col-lg-6 col-sm-4 fw-bold">
                                <p>Price: {specificDetail?.price}৳</p>
                            </div>
                            <div className="col-lg-6 col-sm-4 fw-bold">
                                <p>{specificDetail?.data}</p>
                            </div>
                        </div>
                        <p className="card-text">{specificDetail?.description}</p>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="button">Book Tour</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;