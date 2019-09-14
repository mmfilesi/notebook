import React from 'react';
import PropTypes from 'prop-types';

const SbButton = ( { label = '' } ) => {

  return (
    <button>
      {label}
    </button>
  );
}

SbButton.propTypes = {
  label: PropTypes.string.isRequired
};

export default SbButton;