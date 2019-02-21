import React from 'react';
import styled from 'styled-components'



const ReviewsTabWrapper = styled.div`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  background: white;
  top: 0;
  border-bottom: thin solid #D3D3D3;
  font-size: 12px;
  color: #14b6ad;
  letter-spacing: 0.9px;
  padding-bottom: 10px;
  `
const ReviewsTabW = styled.span`
  min-width: 50px;
  max-width: 100px;
	font-weight: 500;
	letter-spacing: 0.9px;
	cursor: hand;

`
const ReviewsCount = styled.span`
  font-weight: bold;
  margin-left: 6px;
  min-width: 20px;
  background: #eefaf9;
  border-radius: 3px;
  cursor: hand;
  text-align: center;
  `
const ReviewsTab = (props) => {
  return (
    <ReviewsTabWrapper>
      <ReviewsTabW>REVIEWS</ReviewsTabW>
      <ReviewsCount>{props.reviewsQuantity}</ReviewsCount>
    </ReviewsTabWrapper>
  )
}

export default ReviewsTab;




