import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Carousel className='carousel' >
                <Carousel.Item className='carousel-item' >
                    <img
                        className="d-block w-100 "
                        src="https://i.postimg.cc/G2gcdFTW/Background-2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>City Hospital</h3>
                        <p>We are here to treat you the best.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-5"
                        src="https://i.postimg.cc/G2gcdFTW/Background-2.png"
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