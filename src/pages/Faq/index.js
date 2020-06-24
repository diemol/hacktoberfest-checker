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
