import React from 'react';
import styles from './footer.css';


function footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Built with react</p>
      <img className={styles.logoImage} src='./images/logo.png' alt="React Logo" width="60" height="60" />
    </footer>
  );
}

export default footer;