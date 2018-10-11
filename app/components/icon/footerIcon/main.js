import React from 'react';

import styles from './main.scss';

import Icon from '../../icon/main.js';

import classnames from 'classnames/bind';

const cx = classnames.bind(styles);


class FooterIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {

    const { active } = this.state;
    const { icon, onClick } = this.props;

    const classes = cx({
      'footer-icon': true,
      'footer-icon--active': !!active,
    })

    return (
      <div className={classes} onClick={() => this.handleClick()}>
        <Icon icon={icon} />
      </div>
    )
  }
}


export default FooterIcon;
