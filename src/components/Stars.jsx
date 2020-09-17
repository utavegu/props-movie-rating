import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import {nanoid} from 'nanoid';

function Stars({count}) {  
  return (
    <ul className = "card-body-stars u-clearfix">
      {(count >= 1 && count <= 5) && (new Array(count).fill(``).map(() => (<li key = {nanoid()}><Star /></li>)))}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

Stars.defaultProps = {
  count: 0,
}

export default Stars

