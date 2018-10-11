import React from 'react';

import FooterIcon from '../icon/footerIcon/main.js';
import clock from '../icon/SVG/clock.svg';
import user from '../icon/SVG/user.svg';
import star from '../icon/SVG/star.svg';

import styles from './main.scss';

const Footer = (props) => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer__icon']}>
        <FooterIcon icon={star} />
      </div>
      <div className={styles['footer__icon']}>
        <FooterIcon icon={user}  />
      </div>
      <div className={styles['footer__icon']}>
        <FooterIcon icon={clock}  />
      </div>
    </div>
  )
}

Footer.displayName = 'Footer';

export default Footer;
