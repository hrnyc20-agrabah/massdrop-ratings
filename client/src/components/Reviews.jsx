import React from 'react';
import Review from './Review.jsx'






const Reviews = (props) => {
	return (
		<div>
			{props.reviews.map((review, key) => (
				<Review submitReply={props.submitReply} review={review} key={review.review_id} />
			))}
		</div>
	)
}

export default Reviews;
