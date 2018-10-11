import React from 'react';

import styles from './main.scss';

import SVGInline from 'react-svg-inline';


const Icon = ({ icon }) => {
  return (
    <div className={styles['icon']}>
      <SVGInline svg={icon} />
    </div>
  )
}


export default Icon;
