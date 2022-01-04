import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch("doctor.json")
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <Container id="doctors">
            <h4 className='heading'>Our Doctors</h4>
            <div className='line   mx-auto' ></div>
            <Container>
                <Row xs={1} md={3} className="g-5 mb-5">
                    {
                        doctor.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                    }

                </Row>
            </Container>
        </Container>
    );
};

export default Doctors;