import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='containbody'>
            <div class="container">
                <h1 className='text-white'>Our Services</h1>
                <div class="services_row ">
                    <div class="services_card service">
                        <div class="product-card__promotion">
                            <span>50% off</span>
                        </div>
                        <i class="fas fa-laptop-code"></i>
                        <h2>Web Design</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                            quae?
                        </p>
                    </div>
                    <div class="services_card service">
                        <i class="fas fa-chart-line"></i>
                        <h2>Marketing</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                            quae?
                        </p>
                    </div>
                    <div class="services_card service">
                        <div class="product-card__promotion">
                            <span>50% off</span>
                        </div>
                        <i class="fab fa-sketch"></i>
                        <h2>Graphics</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                            quae?
                        </p>
                    </div>
                    <div class="services_card service">
                        <i class="fas fa-database"></i>
                        <h2>Data Analysis</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                            quae?
                        </p>
                    </div>
                    <div class="services_card service">
                        <i class="fas fa-mobile-alt"></i>
                        <h2>App Development</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                            quae?
                        </p>
                    </div>
                    <div class="services_card service">
                        <div class="product-card__promotion">
                            <span>50% off</span>
                        </div>
                        <i class="fas fa-file-invoice"></i>
                        <h2>Accounting</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                            quae?
                        </p>
                    </div>


                </div>
            </div>
       </div>
    );
};

export default Services;