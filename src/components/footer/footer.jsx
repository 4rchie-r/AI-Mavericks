import React from 'react';
import styles from './Footer.module.css';


function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Built with react</p>
      <img className={styles.logoImage} src='./images/logo.png' alt="React Logo" width="60" height="60" />
    </footer>
  );
}

export default Footer;