import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <p className="fw-bolder fs-1">How to reach us?</p>
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
                        <br />
                        <p>(09.00 am – 06.00 pm except Friday and Govt. Holidays. We prefer email.)</p>
                    </p>
                    <p>
                        <strong>WhatsApp:</strong>
                        <br />
                        01758-897959
                        <br />
                        (Text Only. No Call. For emergency contacts only. Please send any inquiries by email only.)
                    </p>
                </div>
            </div>
            <p>Business Hours</p>
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