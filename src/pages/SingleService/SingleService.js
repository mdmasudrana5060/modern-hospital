import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';


const SingleService = () => {
    const { Name } = useParams();
    console.log(Name);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])
    const matchService = services.filter(service => service.Name === Name);
    console.log(matchService);
    return (
        <div>
            <h2 className="my-3 text-center"> Service Details</h2>
            <Row className="w-75 mx-auto my-5  ">
                <Col xs={12} md={6} className="text-center p-3">
                    <img src={matchService[0]?.img} alt="" className="img-fluid"></img>
                </Col>
                <Col xs={12} md={6} className="p-3 text-format">
                    <h3>{matchService[0]?.Name}</h3>
                    <p className="text-secondary lh-lg">{matchService[0]?.Description}</p>

                    <h5>Price:$<span className="text-danger"> {matchService[0]?.price}</span></h5>

                </Col>
            </Row>
        </div>
    );
};

export default SingleService;