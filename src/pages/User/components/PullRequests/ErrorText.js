import React from 'react';
import PropTypes from 'prop-types';

const ErrorText = ({ errorMessage }) => (
  <h2 className="text-sauce-red text-white">{errorMessage}</h2>
);

ErrorText.propTypes = {
  errorMessage: PropTypes.string
};

ErrorText.defaultProps = {
  errorMessage: "Couldn't find any data or we hit an error, try again?"
};

export default ErrorText;
