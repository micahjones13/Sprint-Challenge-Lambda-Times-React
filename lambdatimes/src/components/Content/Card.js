import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={`${props.card.img}`} alt = 'card' />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape(
    {
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }

  )
}
// Card.propTypes = {
//   headline: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
// }
export default Card;
