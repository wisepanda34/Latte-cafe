import React from 'react';

const Schedule = () => {
    return (
        <section className="schedule">
            <div className="container">
                <div className="schedule__wrapper">
                    <div className="schedule__location">
                        <h5>Location</h5>
                        <p>101 Cuba St,<br/>Te Aro, Wellington</p>
                    </div>
                    <div className="schedule__hours">
                        <h5>Hours</h5>
                        <p>Tuesday to Friday<br/>7AM - 3PM</p>
                        <p>Saturday to Sunday<br/>8AM - 3PM</p>
                    </div>
                    <div className="schedule__mondays">
                        <h5>Mondays?</h5>
                        <p>We are closed on Mondays<br/>to reflect and refuel</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Schedule;