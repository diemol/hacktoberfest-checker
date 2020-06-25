import React, { Fragment } from 'react';
import SiteTitle from '../../components/SiteTitle';
import faqData from './data.js';
import FaqEntry from './components/FaqEntry';
import sauceSpecialEditionTShirt from './sauce_special_edition_t_shirt.png';

const Faq = () => (
  <Fragment>
    <SiteTitle />
    <h2 className="text-dark-grey text-center text-4xl font-extrabold">FAQs</h2>
    <div className="mx-auto w-5/6 lg:w-1/2 mb-4 mt-5">
    <div className="faqs shadow-lg flex text-mid-grey mb-6 p-4 break-words">
        <div className="pb-2 flex flex-wrap justify-left content-center rounded mx-auto my-5 overflow-hidden w-5/6 lg:w-100 ">
          <h3 className="text-light-blue mb-4">
            Do you have more links with issues I can work with?
          </h3>
          <p className="text-light-grey overflow-auto">
            Sure, look at these ones! 
            <br></br>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/webdriverio/webdriverio/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Afirst-timers-only"
            >
              WebdriverIO
            </a>
            <br></br>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Human-Connection/Human-Connection/labels/good%20first%20issue"
            >
              Human-Connection
            </a>
          </p>
        </div>
      </div>
      {faqData.map(data => (
        <FaqEntry key={data.question} data={data}></FaqEntry>
      ))}
    </div>
    <div className="text-center overflow-hidden">
      <img className="inline object-cover" src={sauceSpecialEditionTShirt} width="900" height="900" alt="Sauce Special Edition T-Shirt" />
    </div>
  </Fragment>
);

export default Faq;
