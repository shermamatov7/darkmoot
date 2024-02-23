import React from 'react';
import logo from '../images/logo.jpeg'
import './Hero.css'

const Hero = () => {
    return (
        <hero id="container1">
            <div className="hero">
                <img src={logo} alt="" />

                <div className="hero1">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Sunt
                        saepe suscipit, labore molestias corrupti quod <br /> consectetur est officia
                        natus sequi blanditiis, voluptates  <br />tempore nulla nisi  dolores nihil fugiat
                        ad! Alias.</h2>
                </div>
            </div>
        </hero>
    );
};

export default Hero;