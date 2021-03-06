import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://infinite-crag-97882.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])
    return (
        <div>
            <h2 className="text-center fw-bolder">All Orders</h2>
            <div style={{ overflowX: "auto" }}>
                <table className="table table-hover col-sm-12  s}">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Place</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => {
                                const { key, img, pName, name, price, email, status } = order;
                                return (
                                    <tr key={key}>
                                        <th><img width="50px" src={img} alt="" /></th>
                                        <td>{pName}</td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{email}</td>
                                        <td>{status}</td>
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

export default Orders;