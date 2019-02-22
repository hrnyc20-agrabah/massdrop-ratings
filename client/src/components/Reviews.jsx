// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Review from './Review.jsx';
import { Style } from '../../../utilities/styles';

const Reviews = props => {
  return (
    <div>
      {props.reviews.map((review, key) => (
        <Review
          submitReply={props.submitReply}
          review={review}
          key={review.review_id}
        />
      ))}
    </div>
  );
};

export default Reviews;
