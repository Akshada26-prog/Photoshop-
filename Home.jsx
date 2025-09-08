import React from 'react'
import Street2 from "../src/images/street2.webp"
import couple9 from "../src/images/couple9.webp"
import snap9 from "../src/images/snap9.webp"
import Flower4 from "../src/images/sunflower.jpg"
import nature2 from "../src/images/nature2.webp"
import car2 from "../src/images/car2.jfif"


const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="active" aria-current="true" aria-label="Slide 1"></button>

                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Street2} class="d-block w-100" alt="..." height="700px" />
                    </div>
                    <div class="carousel-item">
                        <img src={snap9} class="d-block w-100" alt="..." height="700px" />
                    </div>
                    <div class="carousel-item">
                        <img src={couple9} class="d-block w-100" alt="..." height="700px" />
                    </div>
                    <div class="carousel-item">
                        <img src={Flower4} class="d-block w-100" alt="..." height="700px" />
                    </div>
                    <div class="carousel-item">
                        <img src={nature2} class="d-block w-100" alt="..." height="700px" />
                    </div>
                    <div class="carousel-item">
                        <img src={car2} class="d-block w-100" alt="..." height="700px" />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </>
    )
}
export default Home;
