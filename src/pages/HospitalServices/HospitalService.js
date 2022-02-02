import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const HospitalService = (props) => {
    const { Name, Description, img, price } = props.service
    return (
        <div>
            <CardGroup>
                <Card className="border-0 shadow">
                    <Card.Img className='img-size' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <Card.Text>
                            {Description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0 bg-white text-center">
                        <p>${price}</p>
                    </Card.Footer>
                </Card>

            </CardGroup>
        </div>
    );
};

export default HospitalService;