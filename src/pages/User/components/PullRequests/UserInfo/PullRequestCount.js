import React from 'react';
import PropTypes from 'prop-types';
import pullRequestAmount from '../pullRequestAmount';

const PullRequestCount = ({ pullRequestCount }) => (
  <span className="block text-5xl font-medium w-64 self-center">
    <span className="text-sauce-red">{pullRequestCount}</span> 
    <span className="text-dark-grey">{' '}/{' '}{pullRequestAmount}</span>    
  </span>
);

PullRequestCount.propTypes = {
  pullRequestCount: PropTypes.number.isRequired
};

export default PullRequestCount;
