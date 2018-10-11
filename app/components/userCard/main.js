import React from 'react';

import Footer from '../footer/main.js';
import Icon from '../icon/main.js';
import envelope from '../icon/SVG/envelope.svg';
import phone from '../icon/SVG/phone.svg';
import home from '../icon/SVG/home.svg';
import bubble from '../icon/SVG/bubble.svg';


import classnames from 'classnames/bind';

import styles from './main.scss';

const cx = classnames.bind(styles);


const UserCard = ( { name, emailAddress, phoneNumber, index, photo, friends }) => {

  return (
    <div className={styles['user-card']}>
      <div className={styles['user-card__header']}>
        <div className={styles['user-card__header__image']}>
          <img src={photo} />
        </div>
        <div className={styles['user-card__header__name']}>
          <span>{name}</span>
        </div>
        <div className={styles['user-card__header__icons']}>
          <div className={styles['user-card__header__icons__icon']}>
            <Icon icon={bubble} />
          </div>
          <div className={styles['user-card__header__icons__icon']}>
            <Icon icon={home} />
          </div>
          <div className={styles['user-card__header__icons__icon']}>
            <Icon icon={phone} />
          </div>
          <div className={styles['user-card__header__icons__icon']}>
            <Icon icon={envelope} />
          </div>
        </div>
      </div>
      <div className={styles['user-card__body']}>
        <div className={styles['user-card__body__section']}>
          <div className={styles['user-card__body__section__item']}>
            <div className={styles['user-card__body__section__item__icon']}>
              <Icon icon={home} />
            </div>
            <div className={styles['user-card__body__section__item__text']}>
              <span>{emailAddress}</span>
              <span>Home</span>
            </div>
          </div>
          <div className={styles['user-card__body__section__item']}>
            <div className={styles['user-card__body__section__item__icon']}>
              <Icon icon={phone} />
            </div>
            <div className={styles['user-card__body__section__item__text']}>
              <span>{phoneNumber}</span>
              <span>Mobile</span>
            </div>
          </div>
          <div className={styles['user-card__body__section__item']}>
            <div className={styles['user-card__body__section__item__icon']}>
              <Icon icon={envelope} />
            </div>
            <div className={styles['user-card__body__section__item__text']}>
              <span>{emailAddress}</span>
              <span>Email</span>
            </div>
          </div>
        </div>
        <div className={styles['user-card__body__section']}>
          <div className={styles['user-card__body__section__title']}>
            <span>Most recently contacted</span>
          </div>
          <div className={styles['user-card__body__section__users']}>
            {friends.map((item, index) => {
              return (
                <div className={styles['user-card__body__section__users__item']} key={index}>
                  <span>{item.name}</span>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
      <div className={styles['user-card__footer']}>
        <Footer />
      </div>
    </div>
  )
}

UserCard.displayName = 'UserCard';

export default UserCard;
