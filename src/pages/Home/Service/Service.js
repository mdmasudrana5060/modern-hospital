import React from 'react';
import './Service.css';
import { Button, Card, CardGroup, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = props => {
    const { Name, Description, img, id } = props.service;

    return (
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
                    <Link to={`/singleservice/${Name}`}><Button>Detail</Button></Link>

                </Card.Footer>
            </Card>

        </CardGroup>





    );
};

export default Service;