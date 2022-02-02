import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <Carousel className="carousel" >
                <Carousel.Item className='carousel-item ' >
                    <img
                        className="d-block w-100 carousel-img  "
                        src="https://i.postimg.cc/s2VRV1wc/Background-6.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Modern Hospital</h3>
                        <p>We are here to treat you the best.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100  carousel-img"
                        src="https://i.postimg.cc/V6k1F5t6/Background-2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>City Hospital</h3>
                        <p>We are here to treat you the best.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Container>
    );
};

export default Banner;