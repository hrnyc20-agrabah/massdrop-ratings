/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import ReviewsTab from './components/ReviewsTab.jsx';
import Search from './components/Search.jsx';
import Sort from './components/Sort.jsx';
import Reviews from './components/Reviews.jsx';
import Comment from './components/Comment.jsx';
import { Style } from '../../utilities/styles.js';

const StyledReviews = styled.div`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.9px;
  color: #14b6ad;
  cursor: hand;
`;

const ReviewsCommentsBlock = styled.div`
  max-width: 500;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      // currentItem: ''
    };
    this.getReviews = this.getReviews.bind(this);
    this.submitReply = this.submitReply.bind(this);
  }

  componentDidMount() {
    let itemname = window.location.pathname.split('/')[2];
    this.getReviews(itemname);
  }

  getReviews(itemname) {
    axios
      .get(`/api/items/${itemname}/reviews`)
      .then(response => {
        this.setState({ reviews: response.data });
      })
      .catch(error =>
        console.log('Error getting all reviews from DB:    ', error),
      );
  }

  submitReply(reviewId, commentObj) {
    console.log('submitting reply with', reviewId, commentObj);
    this.setState();
    //axios post request to save comment object to DB to a specific review
    //grab html comment obj
    //.then = map reviews, find review by ID and push the commentObj into comments array - spread operator - in this case we can push new comment into comments array
  }
  //reply button click handler
  //open editor and header for comment creation and 2 buttons - submit and cancel
  //function submit reply
  //take the object with 2 ID , text, etc and save to DB
  // pass the function down to Comment

  render() {
    return (
      <Style.AppOuterWrapper>
        <ReviewsTab reviewsQuantity={this.state.reviews.length} />
        <Style.SearchSortWrapper>
          <Search />
          <Sort />
        </Style.SearchSortWrapper>
        <ReviewsCommentsBlock>
          <Reviews
            reviews={this.state.reviews}
            submitReply={this.submitReply}
          />
        </ReviewsCommentsBlock>
      </Style.AppOuterWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
