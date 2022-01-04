import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className='upper-side'>
                <div className='upper-left-side'>
                    <h2>City Hospital</h2>
                    <p>We here to serve you. <br />
                        Hosue no-16,Road no-16,Abul Kashem Avenue ,Dhaka</p>
                </div>
                <div className='upper-right-side'>
                    <h4>Contact Details</h4>
                    <p>Phone:0191659265 <br />
                        Email:cityhospital14@gmail.com</p>

                </div>

            </div>
            <div className='lower-side'>
                <p>All rights reserved By me</p>
            </div>
        </div>

    );
};

export default Footer;