import React from 'react';
import sauceLogo from './saucelabs_logo_color.png';

const Footer = () => (
  <footer className="text-sm px-8 text-center flex-none py-4">
    <b className="text-dark-grey">You need tasks to work on?</b>
    <p>
      We have collected a list of tasks for projects that our customers use
      on daily basis.
    </p>
    <p>
      Working on these can make a direct impact on the customer experience:
    </p>
    <p style={{padding: "15px 0"}}>
      <p>
      <a href="https://github.com/seleniumhq/selenium/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">Selenium Issue List</a>
      </p>
      <p>
      <a href="https://github.com/webdriverio/webdriverio/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+pick%22">"Good First Pick" WebdriverIO</a>
      </p>
    </p>
    <b className="text-dark-grey">Need Support?</b>
    <p>
      Got stuck somewhere? No idea what to do? No worries, we are here to help!
    </p>
    <p>
      Join the <i>#opensourcethon</i> Slack channel and let us know, the OpenSource team is
      happy to pair with you!
    </p>
    <p>
      Here are some other useful resources:
    </p>
    <p style={{padding: "15px 0"}}>
      <p>
      <a href="https://drive.google.com/file/d/1ee2nVN_5mp32L-ENErRJyHVkDcpvtDST/view?usp=sharing">"Contribute to WebdriverIO" Workshop Recordings</a>
      </p>
    </p>
    <b className="text-dark-grey">
      Disclaimer:
    </b>
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
