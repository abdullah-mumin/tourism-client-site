import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AddAService from '../AddAService/AddAService';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Orders from '../Orders/Orders';

const AdminPanel = () => {
    const { allContexts } = useAuth();
    const { user } = allContexts;
    const { uid } = user;
    const history = useHistory();
    const [active, setActive] = useState("Orders");
    return (

        <div>
            {
                uid !== "KpGO62jRY8d08UvBV4GSeHulNWR2" ? (
                    history.push('/home')
                )
                    : (
                        <div className="container">
                            <div className="row my-3">
                                <div className="col-lg-3 col-sm-12">
                                    <ul className="list-unstyled ">
                                        <li className="w-100 mb-2 border-0 rounded-3">
                                            <input
                                                onClick={() => setActive("Orders")}
                                                className={active === "Orders" ? "w-100 bg-primary border-0 rounded-3 text-white d-block"
                                                    : "w-100 d-block"
                                                }
                                                type="button" value="Orders" />
                                        </li>
                                        <li className="w-100 mb-2 border-0 rounded-3">
                                            <input
                                                onClick={() => setActive("Manage All Orders")}
                                                className={active === "Manage All Orders" ? "w-100 bg-primary border-0 rounded-3 text-white d-block"
                                                    : "w-100 d-block"
                                                }
                                                type="button" value="Manage All Orders" />
                                        </li>
                                        <li className="border-0 rounded-3">
                                            <input
                                                onClick={() => setActive("Add New Service")}
                                                className={active === "Add New Service" ? "w-100 bg-primary border-0 rounded-3 text-white d-block"
                                                    : "w-100 d-block"
                                                }
                                                type="button" value="Add New Service" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-9 col-sm-12">
                                    {
                                        (active === "Orders" && <Orders />) ||
                                        (active === "Manage All Orders" && <ManageAllOrders />) ||
                                        (active === "Add New Service" && <AddAService />)
                                    }
                                </div>
                            </div>
                        </div>
                    )
            }


        </div>
    );
};

export default AdminPanel;