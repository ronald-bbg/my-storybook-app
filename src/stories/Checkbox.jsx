import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ primary, backgroundColor, size, ...props }) => {
  const mode = primary ? 'storybook-checkbox--primary' : 'storybook-checkbox--secondary';
  return (
    <input
      type="checkbox"
      className={['storybook-checkbox', `storybook-checkbox--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
        
    </input>
  );
};

Checkbox.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: 'medium'
};
