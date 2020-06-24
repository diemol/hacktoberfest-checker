import React from 'react';
import movingBot from './sauce_bot_moving.gif';

const SiteTitle = () => (
  <div className="text-center">
    <a className="no-underline inline-block py-12 md:py-8" href="/">
      <h1 className="text-dark-grey text-4xl md:text-6xl">
        OpenSource<span className="text-sauce-red">thon</span>
      </h1>
      <small className="block text-right -mt-4 mr-8 text-mid-blue text-base italic">
        #HFH2020 Edition
      </small>
      <img className="inline rounded-full h-24 w-24 object-cover" src={movingBot} width="120" height="120" alt="Loading icon" />
    </a>
  </div>
);

export default SiteTitle;
