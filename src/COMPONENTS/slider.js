import React from 'react'
import {Carousel }from "react-bootstrap"

import "./slider.css"


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100 slider"
          src="https://media.adeo.com/media/1756188/format/jpeg?width=400&crop=3:4,smart&quality=85"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-white fw-bold'>Economiser De L Argent</h3>
          <button className='text-dark bg-warning p-3 rounded'>demnder un devis</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src="https://media.adeo.com/media/1757725/format/jpeg?width=400&crop=4:3,smart&quality=85"
          alt="Second slider"
        />

        <Carousel.Caption>
          <h3>Economiser De L Argent</h3>
          <button className='text-dark bg-warning p-3 rounded'>demnder un devis</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src="https://media.adeo.com/media/1753184/format/jpeg?width=400&crop=4:3,smart&quality=85"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Economiser De L Argent</h3>
          <p>
          <button className=' text-dark bg-warning p-3 rounded'>demnder un devis</button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;