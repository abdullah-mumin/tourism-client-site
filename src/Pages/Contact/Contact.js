import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-4 text-center">
            <p className="fw-bolder fs-1"> <span>How to reach us?</span> </p>
            <div className="row">
                <div className="col-6">
                    <p>
                        <strong>Address</strong>
                        <br />
                        House 6 (Ground Floor), Road 17
                        <br />
                        Nikunja 2, Khilkhet
                        <br />
                        Dhaka 1229
                        <br />
                        Bangladesh.
                    </p>
                </div>
                <div className="col-6">
                    <p>
                        <strong>Phone: </strong>
                        <br />
                        +88-01799-002244
                    </p>
                    <p>
                        <strong>WhatsApp:</strong>
                        <br />
                        01758-897959
                        <br />
                        (Text Only. No Call. For emergency contacts only.)
                    </p>
                </div>
            </div>
            <hr />
            <p className="fw-bolder fs-3">Business Hours</p>
            <div>
                <p>
                    <strong>Saturday – Thursday:</strong>
                    <br />
                    09.00 am – 06.00 pm (GMT+6)
                </p>
                <p>
                    <strong>Friday:</strong>
                    <br />
                    Closed
                </p>
                <p>
                    <strong>Govt. Holidays:</strong>
                    <br />
                    Closed
                </p>
            </div>
        </div>
    );
};

export default Contact;