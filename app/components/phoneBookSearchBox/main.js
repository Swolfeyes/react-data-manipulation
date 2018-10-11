import React from 'react';

import Icon from '../icon/main.js';
import search from '../icon/SVG/search.svg';

import styles from './main.scss';

class PhoneBookSearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.inputValue = React.createRef();
  }

  handleChange(e) {

    const { value } = e.target;

    this.setState({
      value,
    });

    this.props.onChange(value);
  }

  handleIconClick() {

    const { value } = this.state;

    this.setState({
      value,
    });

    this.props.onSubmit(value);
  }

  render() {

    const { value } = this.state;
    const { onSubmit } = this.props;

    return (
      <div className={styles['search-box']}>
        <div className={styles['search-box__input']}>
          <input
            type='text'
            value={value}
            onChange={this.handleChange}
            ref={this.inputValue}
          />
        </div>
        <div className={styles['search-box__icon']} onClick={() => this.handleIconClick(value)}>
          <Icon icon={search} />
        </div>
      </div>
    )
  }
}


PhoneBookSearchBox.displayName = 'PhoneBookSearchBox';

export default PhoneBookSearchBox;
