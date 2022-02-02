import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const DoctorDetail = (props) => {
    const { name, img, description, phone, email } = props.doctor;
    return (
        <CardGroup>
            <Card className="border-0 shadow">
                <Card.Img className='img-size' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-white text-center">
                    <p>call:{phone} <br />
                        email:{email}</p>
                </Card.Footer>
            </Card>

        </CardGroup>
    );
};

export default DoctorDetail;