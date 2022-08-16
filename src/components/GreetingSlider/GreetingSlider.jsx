import React from 'react';
import Slider from 'react-slick';
import './style.css';

const GreetingSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
      <div>
        <div className='post'>
          <img
            src='https://res.cloudinary.com/dw369yzsh/image/upload/v1470916851/walking-dead_jwzyfh.jpg'
            alt='Mad Max'
          />
        </div>
      </div>
    </Slider>
  );
};

export default GreetingSlider;
