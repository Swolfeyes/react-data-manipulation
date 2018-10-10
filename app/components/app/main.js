import React from 'react';
import styles from './main.scss';

import data from '../../data.json';

import PhoneBookUser from '../phoneBookUser/main.js';


const PhoneBook = () => {

  const buildPhoneBook = () => {
    return data.map((item, index) => {
      return (
        <PhoneBookUser
          key={index}
          name={item.name}
          emailAddress={item.email}
          phoneNumber={item.phone}
          status={item.isActive}
          photo={item.picture}
        />
      )
    });
  }

  return (
    <div className={styles['phone-book']}>{buildPhoneBook()}</div>
  )
}


export default PhoneBook;

PhoneBook.displayName = 'PhoneBook';
