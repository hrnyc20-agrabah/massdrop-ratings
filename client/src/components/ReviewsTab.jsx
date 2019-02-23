import React from 'react';
// import styled from 'styled-components';
import { Style } from '../../../utilities/styles';

const ReviewsTab = props => {
  return (
    <Style.ReviewsTabWrapper>
      <Style.ReviewsTab>
        <Style.Reviews>REVIEWS</Style.Reviews>
        {props.reviewsQuantity > 0 ? (
          <Style.ReviewsCount>{props.reviewsQuantity}</Style.ReviewsCount>
        ) : null}
      </Style.ReviewsTab>
    </Style.ReviewsTabWrapper>
  );
};

export default ReviewsTab;
