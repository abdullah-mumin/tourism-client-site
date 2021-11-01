import React from 'react';
import award1 from '../../images/award/award-1.png'
import award2 from '../../images/award/award-2.png'
import award3 from '../../images/award/award-3.png'

const Award = () => {
    return (
        <div className="container mt-4">
            <hr />
            <div>
                <p className="fw-bolder fs-1 text-center bg-success">Our Rewards</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 text-center col-sm-12">
                    <img src={award2} alt="" />
                </div>
                <div className="col-lg-4 text-center col-sm-12">
                    <img src={award1} alt="" />
                </div>
                <div className="col-lg-4 text-center col-sm-12">
                    <img src={award3} alt="" />
                </div>
            </div>
            <div className="mt-4" style={{ textAlign: "left" }}>
                <p className="fw-bolder fs-1 text-start">A multi-award-winning local tour operator in Bangladesh</p>

                <p className="fw-bold">Nijhoom Tours is a multi-award-winning local tour operator in Bangladesh specializing in organizing tours in Bangladesh for seasoned western travelers. We organize 1-28 days tours in Bangladesh with a tiny group of 2-5 travelers only.</p>

                <p className="fw-bold">Nijhoom Tours is the winner of the <span className="text-primary">TripAdvisor Hall of Fame 2019 award</span> - the first and only one in Bangladesh! We've awarded this for earning the <span className="text-primary">TripAdvisor Certificate of Excellence</span> last five years consecutively <span className="text-primary">in 2015, 2016, 2017, 2018, and 2019</span>, based on our clients' ratings.</p>

                <p className="fw-bold">We had also earned the <span className="text-primary">TripAdvisor Travelers Choice Award in 2020</span>. You can expect only the highest quality service from us. We have <span className="text-primary">350+ reviews on TripAdvisor</span> from our clients.</p>

                <p className="fw-bold">For being a home-grown local operator, our prices will be less than half than any foreign operator can offer since we do not need to pay any middlemen. All the money you pay goes directly to the locals. By directly booking with us, you are also supporting a local small business and making the almost non-existing tourism sector in Bangladesh a little more sustainable.</p>

                <p className="fw-bold">Visit Bangladesh with us for an unforgettable experience. Our knowledgeable and experienced guides will provide you an experience of a different Bangladesh than you thought you knew about! <span className="text-primary">We regularly attend big travel shows in London</span>. You can meet us there too before you travel to Bangladesh.</p>

                <p className="fw-bold">Start planning your dream holiday now. We are looking forward to seeing you in Bangladesh soon! Stay safe until then!</p>
            </div>
        </div>
    );
};

export default Award;