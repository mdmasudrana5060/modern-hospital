import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

import './Services.css';



const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <Container id="services">
                <h4 className='heading'>Our Services</h4>
                <div className='line   mx-auto' ></div>
                <Container>
                    <Row xs={1} md={3} className="g-5 mb-5">
                        {
                            service.map(service => <Service service={service} key={service.id}></Service>)
                        }

                    </Row>
                </Container>


            </Container>

        </div>
    );
};

export default Services;