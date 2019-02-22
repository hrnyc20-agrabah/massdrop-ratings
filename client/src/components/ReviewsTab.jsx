import React from 'react';
// import styled from 'styled-components';
import { Style } from '../../../utilities/styles';

const ReviewsTab = props => {
  return (
    <Style.ReviewsTabWrapper>
      <Style.ReviewsTab>
        <Style.Reviews>REVIEWS</Style.Reviews>
        <Style.ReviewsCount>{props.reviewsQuantity}</Style.ReviewsCount>
      </Style.ReviewsTab>
    </Style.ReviewsTabWrapper>
  );
};

export default ReviewsTab;
