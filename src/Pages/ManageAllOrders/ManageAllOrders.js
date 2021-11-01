import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [reload]);

    const handleCancle = (id) => {
        const confarmation = window.confirm('Are you sure  you want to delete!');
        if (confarmation) {
            fetch(`http://localhost:5000/remove/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                    else {
                        alert('Something went wrong!');
                    }
                })
        }
    }

    const handleConfirm = (id) => {
        const confirmation = window.confirm('Are you sure to confirm');
        if (confirmation) {
            fetch(`http://localhost:5000/confirm/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setReload(!reload);
                    }
                    else {
                        alert('Already Confirmed!');
                    }
                })
        }
    }

    return (
        <div>
            <h2 className="text-center fw-bolder">Manage All Orders</h2>
            <div style={{ overflowX: "auto" }}>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Place</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancle</th>
                            <th scope="col">Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => {
                                const { _id, img, pName, name, price, email, status } = order;
                                return (
                                    <tr>
                                        <th><img width="50px" src={img} alt="" /></th>
                                        <td>{pName}</td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{email}</td>
                                        <td>{status}</td>
                                        <td><button onClick={() => handleCancle(_id)} className="btn btn-danger">Cancle</button></td>
                                        <td><button onClick={() => handleConfirm(_id)} className="btn btn-success">Confirm</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;