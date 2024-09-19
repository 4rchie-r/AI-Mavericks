import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logoImage} src='./images/logo.png' alt="React Logo" width="60" height="60" />
      <h1 className={styles.heading}>React Flashcards</h1>
      <h2 className={styles.heading2}>🧠Expand Your React Knowledge, One Set At A Time 🙋‍♂️ </h2>
    </header> 
  );
}

export default Header;