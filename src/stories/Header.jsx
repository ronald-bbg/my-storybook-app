import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

export const Header = ({ ariaLabel, ...props }) => {
  return (
    <header>
      <div className="storybook-header">
        <div>

          <header class="usa-header usa-header--extended tablet-lg:padding-top-3">
            <div class="usa-navbar">
              <div class="usa-logo">
                <em class="usa-logo__text">
                  <a  
                    {...props}
                    href="/ecosystem/views/home.html" 
                    aria-label={ariaLabel}
                    title="VHA Innovation Ecosystem">
                    VA <span> | VHA Innovation Ecosystem</span>
                  </a>
                </em>
              </div>
            </div>
          </header>

        </div>

      </div>
    </header>
  );
};


Header.propTypes = {
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
   * Button contents
   */
  ariaLabel: PropTypes.string.isRequired,
};


Header.defaultProps = {
  ariaLabel: 'VHA Innovation Ecosystem'
};

