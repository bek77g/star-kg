import React from 'react';
import Flickity from 'react-flickity-component';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Comments from '../../components/Comments/Comments';
import MainSlider from '../../components/MainSlider/MainSlider';
import './style.css';

const Home = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
          slidesToShow: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  let commentsSlider = {
    groupCells: true,
  };
  return (
    <>
      <MainSlider />
      <div className='main-wrapper container'>
        <div className='popular-stars'>
          <div className='title-link'>
            <h2 className='stars-title'>Каталог</h2>
            <h3>
              <Link to='stars'>открыть все</Link>
            </h3>
          </div>
          <div className='star-cards'>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <Link to='catalog/detailPage'>
                  <div className='card-content'>
                    <div className='star-name'>Changes Are</div>
                    <div className='star-by'>by Richard Russo</div>

                    <div className='star-sum card-sum'>
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s stars
                      for years.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <Link to='catalog/detailPage'>
                  <div className='card-content'>
                    <div className='star-name'>Changes Are</div>
                    <div className='star-by'>by Richard Russo</div>

                    <div className='star-sum card-sum'>
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s stars
                      for years.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <Link to='catalog/detailPage'>
                  <div className='card-content'>
                    <div className='star-name'>Changes Are</div>
                    <div className='star-by'>by Richard Russo</div>

                    <div className='star-sum card-sum'>
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s stars
                      for years.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <Link to='catalog/detailPage'>
                  <div className='card-content'>
                    <div className='star-name'>Changes Are</div>
                    <div className='star-by'>by Richard Russo</div>

                    <div className='star-sum card-sum'>
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s stars
                      for years.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <Link to='catalog/detailPage'>
                  <div className='card-content'>
                    <div className='star-name'>Changes Are</div>
                    <div className='star-by'>by Richard Russo</div>

                    <div className='star-sum card-sum'>
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s stars
                      for years.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <div className='card-content'>
                  <div className='star-name'>Picnic Comma Lightning</div>
                  <div className='star-by'>by Lucy Parker</div>

                  <div className='star-sum card-sum'>
                    Readers of all ages and walks of life have drawn inspiration
                    and empowerment from Elizabeth Gilbert’s stars for years.{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <Link to='catalog/detailPage'>
                  <div className='card-content'>
                    <div className='star-name'>Changes Are</div>
                    <div className='star-by'>by Richard Russo</div>

                    <div className='star-sum card-sum'>
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s stars
                      for years.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='star-card'>
              <div className='content-wrapper'>
                <img
                  src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2022/cs3uQh20SxWdnfOF4kzD.jpeg?width=500'
                  alt=''
                  className='star-card-img'
                />
                <Link to='catalog/detailPage'>
                  <div className='card-content'>
                    <div className='star-name'>Changes Are</div>
                    <div className='star-by'>by Richard Russo</div>

                    <div className='star-sum card-sum'>
                      Readers of all ages and walks of life have drawn
                      inspiration and empowerment from Elizabeth Gilbert’s stars
                      for years.{' '}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='comments-slider container'>
        <div className='title-link'>
          <h2 className='stars-title'>Отзывы</h2>
          <h3>
            <Link to='reviews'>открыть все</Link>
          </h3>
        </div>
        <Flickity elementType={'div'} options={commentsSlider}>
          <div class='testimonial-box'>
            <div class='box-top'>
              <div class='profile'>
                <div class='profile-img'>
                  <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' />
                </div>
                <div class='name-user'>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class='reviews'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='far fa-star'></i>
              </div>
            </div>
            <div class='client-comment'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
          <div class='testimonial-box'>
            <div class='box-top'>
              <div class='profile'>
                <div class='profile-img'>
                  <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' />
                </div>
                <div class='name-user'>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class='reviews'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='far fa-star'></i>
              </div>
            </div>
            <div class='client-comment'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
          <div class='testimonial-box'>
            <div class='box-top'>
              <div class='profile'>
                <div class='profile-img'>
                  <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' />
                </div>
                <div class='name-user'>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class='reviews'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='far fa-star'></i>
              </div>
            </div>
            <div class='client-comment'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
          <div class='testimonial-box'>
            <div class='box-top'>
              <div class='profile'>
                <div class='profile-img'>
                  <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' />
                </div>
                <div class='name-user'>
                  <strong>Liam mendes</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <div class='reviews'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='far fa-star'></i>
              </div>
            </div>
            <div class='client-comment'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
        </Flickity>
      </div>
      <div className='new-stars container'>
        <div className='title-link'>
          <h2 className='stars-title'>Новые звезды</h2>
          <h3>
            <Link to='/stars'>открыть все</Link>
          </h3>
        </div>
        <Slider {...settings}>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
          <div>
            <div className='stars-list-star'>
              <img
                src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/May2021/qaEXv0cbNpI3ny3N7bxn.jpg?width=500'
                alt='Mad Max'
              />
              <p className='stars-list-price'>15 000 C</p>
              <Link to='catalog/detailPage'>
                <p className='slider-star-name'>Елена Ксенофонтова</p>
              </Link>
              <Link to='stars'>
                <p className='star-type'>Актеры</p>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
