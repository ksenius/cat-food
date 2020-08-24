import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__attribution" lang="en">
        Test assignment by{' '}
        <a
          className="footer__link"
          href="https://funbox.ru"
          target="_blank"
          rel="noreferrer"
        >
          FunBox
        </a>
        . Coded by{' '}
        <a
          className="footer__link"
          href="https://github.com/ksenius/cat-food"
          target="_blank"
          rel="noreferrer"
        >
          ksenius
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
