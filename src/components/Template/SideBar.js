import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link> */}
      <header>
        <h2>Oscar Zhang</h2>
        <p><a href="mailto:oscarzhang3279@gmail.com">oscarzhang3279@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Oscar. I am passionate about building net-postive products.
        I am a student at <a href="https://entrepreneurship.babson.edu/babson-number-one-entrepreneurship/#:~:text=Babson%20College%20was%20named%20the,by%20U.S.%20News%20%26%20World%20Report.">Babson College</a> and
        <a href="https://www.newswise.com/articles/mit-study-names-olin-college-world-leader-in-engineering-education"> Olin School of Engineering </a>. I have worked in multiple industries and companies
        including <a href="https://aws.amazon.com/">AWS</a>
        , <a href="https://sosv.com/">SOSV</a>
        , <a href="https://corporate.jd.com/home">JD.com</a>
        , <a href="https://www.safran-group.com/">Safran</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Oscar Zhang <Link to="/">zhangoscar.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
