import React from 'react';
import sauceLogo from './saucelabs_logo_color.png';

const Footer = () => (
  <footer className="text-sm px-8 text-center flex-none py-4">
    <p className="text-dark-grey">
      Disclaimer:
    </p>
    <p className="text-dark-grey">
      This site is a fork of {' '}
      <a
        href="https://github.com/jenkoian/hacktoberfest-checker"
        target="_blank"
        rel="noopener noreferrer"
      >
        hacktoberfest-checker
      </a>
      .
    </p>
    <p className="text-dark-grey">
      Made for the Sauce Labs 2020 Hackathon. See the code {' '}
      <a
        href="https://github.com/diemol/hacktoberfest-checker"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </p>
    <p className="text-dark-grey">
      Not affiliated with{' '}
      <a
        href="https://hacktoberfest.digitalocean.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hacktoberfest
      </a>
      .
    </p>
    <div className="p-2 mt-4" id="faqs">
      <a
        rel="noopener noreferrer"
        className="bg-sauce-red hover:bg-light-blue text-white hover:text-mid-blue px-2 py-1 pointer no-underline text-sm"
        href="/Faq"
      >
      <i class="fas fa-question"/> FAQs
      </a>
    </div>
    <div className="p-2 mt-4" id="sauce-logo">
      <a
        rel="noopener noreferrer"
        className="px-2 py-1 pointer no-underline"
        target="_blank"
        href="https://saucelabs.com/"
      >
        <img className="inline object-cover" src={sauceLogo} alt="Sauce Labs" />
      </a>
    </div>
  </footer>
);

export default Footer;
