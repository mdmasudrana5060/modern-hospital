import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HospitalService from './HospitalService';

const HospitalServices = () => {
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
                            service?.map(service => <HospitalService service={service} key={service.id}></HospitalService>)
                        }

                    </Row>
                </Container>


            </Container>

        </div>
    );
};

export default HospitalServices;