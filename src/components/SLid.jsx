import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function SLid() {
    return (
        <Carousel controls={false} indicators={true} interval={3000} pause={false}>
            {/* Slide 1 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/src/assets/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg"
                    alt="Slide 1"
                    style={{ height: '95vh', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Village Life</h3>
                    <p>Experience traditional village life in Kerala.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/src/assets/beautiful-paradise-island-with-beach-sea.jpg"
                    alt="Slide 2"
                    style={{ height: '95vh', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Tea Plantations</h3>
                    <p>Misty mornings over lush green hills.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/src/assets/pexels-manish-dhodi-1475001-12193834.jpg"
                    alt="Slide 3"
                    style={{ height: '95vh', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Backwater Bliss</h3>
                    <p>Peaceful houseboat rides through scenic canals.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SLid;
