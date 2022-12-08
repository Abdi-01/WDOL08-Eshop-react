import React from 'react';
import { Text } from '@chakra-ui/react';

const Carousel = (props) => {

    return <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='p-5 shadow rounded bg-shadow'>
                        <Text fontSize="4xl">Find your best <span className='fw-bold'>Livingroom</span>  furniture</Text>
                        <p className='w-75 lead'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo quisquam delectus optio molestias ullam tenetur nobis ab adipisci recusandae accusantium, voluptatibus expedita, rerum consectetur id dolorem. Accusantium, recusandae quibusdam.
                        </p>
                        <div style={{ textAlign: "right" }}>
                            <button className='btn btn-outline-light w-25'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='p-5 shadow rounded bg-shadow'>
                        <Text fontSize="4xl">Find your best <span className='fw-bold'>Kitchen</span>  furniture</Text>
                        <p className='w-75 lead'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo quisquam delectus optio molestias ullam tenetur nobis ab adipisci recusandae accusantium, voluptatibus expedita, rerum consectetur id dolorem. Accusantium, recusandae quibusdam.
                        </p>
                        <div style={{ textAlign: "right" }}>
                            <button className='btn btn-outline-light w-25'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='p-5 shadow rounded bg-shadow'>
                        <Text fontSize="4xl">Find your best <span className='fw-bold'>Bedroom</span>  furniture</Text>
                        <p className='w-75 lead'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo quisquam delectus optio molestias ullam tenetur nobis ab adipisci recusandae accusantium, voluptatibus expedita, rerum consectetur id dolorem. Accusantium, recusandae quibusdam.
                        </p>
                        <div style={{ textAlign: "right" }}>
                            <button className='btn btn-outline-light w-25'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}

export default Carousel;