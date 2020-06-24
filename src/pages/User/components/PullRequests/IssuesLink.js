import React from 'react';

const IssuesLink = () => (
  <div className="flex flex-wrap justify-center content-center text-center">
    <div className="text-dark-grey pb-4">
      Look at the following issues{' '}
      <a
        href="https://github.com/search?q=label:up-for-grabs+state:open+type:issue"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>{' & '}
      <a
        href="https://up-for-grabs.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>{' '}
      and get hacking!
    </div>
  </div>
);

export default IssuesLink;
