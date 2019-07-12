import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h3>Ambrose Ryan Burgett</h3>
        <p><a href="mailto:me@ambroseryanb.com">me@ambroseryanb.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ryan. I like trying new things.
            I am a <a href="https://www.mcgill.ca/">McGill University</a> graduate, and i&apos;m now working at <a href="https://www.x2omedia.com/">X2O Media</a> as a Software Developer. I&apos;m passionate about cooking, ultimate frisbee, friendship, and anything that makes people smile and laugh!
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      {/* <p className="copyright">&copy; Ambrose Ryan Burgett <Link to="/">arburgett1.com</Link>.</p> */}
    </section>
  </section>
);

export default Nav;
