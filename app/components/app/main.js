import React from 'react';

import data from '../../data.json';

import PhoneBookUser from '../phoneBookUser/main.js';
import UserCard from '../userCard/main.js';
import PhoneBookSearchBox from '../phoneBookSearchBox/main.js';
import Footer from '../footer/main.js';

import styles from './main.scss';


class PhoneBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: data,
      isUserCardVisible: false,
      currentCardIndex: undefined,
      searchBoxValue: '',
      currentCardName: undefined,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getActiveCard(currentCardIndex) {
    this.setState({
      users: data,
      isUserCardVisible: true,
      currentCardIndex,
    });
  }

  handleInputChange(value) {

    const filteredUsers = data.filter((item) => item.name.includes(value));

    this.setState({
      users: filteredUsers,
      searchBoxValue: value,
    });
  }

  getActiveCardByNameSearch(value) {

    const { users } = this.state;

    const filteredUsers = data.filter((item) => item.name.includes(value));

    this.setState({
      users: filteredUsers,
      searchBoxValue: value,
    });
  }

  render() {

    const { isUserCardVisible, currentCardIndex, searchBoxValue, users } = this.state;

    const phoneBook = users.map((item, index) => {
      return (
        <PhoneBookUser
          key={index}
          name={item.name}
          emailAddress={item.email}
          phoneNumber={item.phone}
          status={item.isActive}
          photo={item.picture}
          onClick={() => this.getActiveCard(index)}
        />
      )
    });

    const phoneBookCard = users.map((item, index) => {
      return (
        <UserCard
          key={index}
          name={item.name}
          emailAddress={item.email}
          phoneNumber={item.phone}
          photo={item.picture}
          friends={item.friends}
        />
      )
    });

    return (

      <div className={styles['app']}>
        <div className={styles['app__phone-book']}>
          <div className={styles['app__phone-book__search-box']}>
            <PhoneBookSearchBox
              onChange={this.handleInputChange}
              onSubmit={() => this.getActiveCardByNameSearch(searchBoxValue)}
            />
          </div>
          <div className={styles['app__phone-book__users']}>
            {phoneBook}
          </div>
          <div className={styles['app__phone-book__footer']}>
            <Footer />
          </div>
        </div>
        {isUserCardVisible &&
          <div className={styles['app__user-card']}>
            {phoneBookCard[currentCardIndex]}
          </div>
        }
      </div>
    )
  }
}


PhoneBook.displayName = 'PhoneBook';

export default PhoneBook;
