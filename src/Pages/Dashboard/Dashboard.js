import React, { useState } from 'react';

const Dashboard = () => {

    const [current, setCurrent] = useState("Orders");

    const handleOrders = (e) => {
        setCurrent(e.target.value);
    }
    const handleManageOrders = (e) => {
        setCurrent(e.target.value);
    }
    const handleAddNewService = (e) => {
        setCurrent(e.target.value);
    }
    console.log(current);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 my-4 border bg-primary bg-opacity-50 rounded-3">
                    <div className="d-grid">
                        <input className="my-2 rounded-2 border-0" onClick={handleOrders} type="button" value="Orders" />
                        <input className="my-2 rounded-2 border-0" onClick={handleManageOrders} type="button" value="Manage Orders" />
                        <input className="my-2 rounded-2 border-0" onClick={handleAddNewService} type="button" value="Add New Service" />
                    </div>
                </div>
                <div className="col-9">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;