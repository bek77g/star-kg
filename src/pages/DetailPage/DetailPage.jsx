import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../../components/Comments/Comments';
import GreetingSlider from '../../components/GreetingSlider/GreetingSlider';
import './style.css';

const DetailPage = () => {
  return (
    <>
      <section id='banner' className='clearfix'>
        <div id='banner_image'>
          <div id='banner_image-inner'></div>
        </div>
        <div id='banner_content_wrapper'>
          <div id='poster'>
            <img
              src='https://ahlkqsbsrq.cloudimg.io/v7/https://jo.ru/storage/stars/avatars/deekvpF63dOVicquxQvklmRckQzYJ2SdMzjha1ro.jpeg'
              alt='Deadpool Movie Poster'
              className='featured_image'
            />
          </div>
          <div id='content'>
            <h2 className='title'>Виталий Гогунский</h2>
            <div>
              <Link className='infoType' to='/actors'>
                Актёры
              </Link>
              {',  '}
              <Link className='infoType' to='/tv'>
                ТВ
              </Link>
            </div>
            <p className='info'>
              Это же тот самый Кузя из «Универа»! Да-да, исполнитель хита «Шняга
              Шняжная» собственной персоной! Встречайте на JO.ru — Виталий
              Гогунский!
            </p>
          </div>
        </div>
      </section>
      <div className='star-callback'>
        <a href=''>Заказать видео за 20 000</a>
      </div>
      <div className='star__page-links'>
        <div className='star__page-links-left'>
          <a href='#videos' className='scroll-to-block'>
            Видео-Поздравления
          </a>
          <a href='#comments' className='scroll-to-block'>
            Отзывы
          </a>
          <a href='#' className='scroll-to-block'>
            О звезде
          </a>
        </div>
      </div>
      <section id='videos' className='video__slider'>
        <h2>Примеры выполненных заказов</h2>
        <GreetingSlider />
      </section>
      <div id='comments' className='reviews container'>
        <div className='title-link'>
          <h2>Отзывы</h2>
        </div>
        <Comments />
      </div>
    </>
  );
};

export default DetailPage;
