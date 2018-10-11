import React from 'react';

import UserCard from '../userCard/main.js';

import styles from './main.scss';

class PhoneBookUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }
  }

  handleCardClick() {
    this.setState({
      clicked: !this.state.clicked,
    });

    this.props.onClick();
  }

  render() {

    const { clicked } = this.state;
    const { name, phoneNumber, emailAddress, status, photo, onClick, index } = this.props;

    return (
      <div>
        <div className={styles['phone-book-user']} onClick={() => this.handleCardClick()}>
          <div className={styles['phone-book-user__image']}>
            <img src={photo} />
          </div>
          <div className={styles['phone-book-user__details']}>
            <div className={styles['phone-book-user__details__name']}>
              <span>{name}</span>
            </div>
            <div className={styles['phone-book-user__details__number']}>
              <span>{phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


PhoneBookUser.displayName = 'PhoneBookUser';

export default PhoneBookUser;
