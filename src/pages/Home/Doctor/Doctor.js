import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';



const Doctor = props => {
    const { name, img, description } = props.doctor;

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

            </Card>

        </CardGroup>
    );
};

export default Doctor;