import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Order = () => {
    const { id } = useParams();
    const [Orders, setOrders] = useState([]);
    const [singleOrder, setSinglrOrder] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useHistory();
    const { allContexts, user } = useAuth();
    // const { user } = allContexts;
    const { uid } = user;
    console.log(uid);


    useEffect(() => {
        const url = '/travels.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })

    }, []);

    useEffect(() => {
        if (Orders.length > 0) {
            const remainingData = Orders.find(order => order.id == id);
            setSinglrOrder(remainingData);
        }
    }, [Orders]);
    // console.log(singleOrder);

    const handleGetName = e => {
        console.log(e.target.value);
        setName(e.target.value);
    };
    const handleGetEmail = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handleOrderConfirm = (e) => {
        e.preventDefault();
        console.log("clicked")
    }

    return (
        <div>
            <p>Name: {singleOrder?.name}</p>
            <div className="text-center my-4">
                <h2>Place Your Order</h2>
                <p className="text-danger text-center"></p>
                <div className="w-25 mx-auto">
                    <Form onSubmit={handleOrderConfirm}>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Name
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <FormControl
                                        required
                                        onBlur={handleGetName}
                                        type="text"
                                        autoComplete="current-name"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <FormControl
                                        required
                                        onBlur={handleGetEmail}
                                        type="email"
                                        autoComplete="current-email"
                                        id="email"
                                        placeholder="Enter your email address"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <FormControl
                                        required
                                        autoComplete="current-name"
                                        id="tour-name"
                                        value={singleOrder?.name}
                                        placeholder="Tour Place Name"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <button type="submit" className="btn btn-primary mt-2 w-100">
                            Confirm
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Order;