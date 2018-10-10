import React from 'react';

import styles from './main.scss';

const PhoneBookUser = ({ name, phoneNumber, emailAddress, status, photo }) => {
  return (
    <div className={styles['phone-book-user']}>
      <div className={styles['phone-book-user__item']}>
        <div className={styles['phone-book-user__item__name__image']}>
          <img src={photo} />
        </div>
        <div className={styles['phone-book-user__item--status']}>
          {(status)
            ? <div className={styles['phone-book-user__item--status-online']}></div>
            : <div className={styles['phone-book-user__item--status-offline']}></div>
          }
        </div>
        <div className={styles['phone-book-user__item__name']}>
          <span>{name}</span>
        </div>
      </div>
      <div className={styles['phone-book-user__item']}>
        <div className={styles['phone-book-user__item__email']}>
          <span>{emailAddress}</span>
        </div>
        <div className={styles['phone-book-user__item__number']}>
          <span>{phoneNumber}</span>
        </div>
      </div>
    </div>
  )
}

PhoneBookUser.displayName = 'PhoneBookUser';

export default PhoneBookUser;
