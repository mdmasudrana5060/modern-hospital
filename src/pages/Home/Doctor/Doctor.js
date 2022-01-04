import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';



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
                <Card.Footer className="border-0 bg-white text-center">
                    <Button>Detail</Button>
                </Card.Footer>
            </Card>

        </CardGroup>
    );
};

export default Doctor;