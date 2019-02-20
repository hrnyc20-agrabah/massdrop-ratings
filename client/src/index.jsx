import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import styled from 'styled-components'
import Search from './components/Search.jsx'
import Sort from './components/Sort.jsx'
import Reviews from './components/Reviews.jsx'
import Comment from './components/Comment.jsx'

const OuterWrapper = styled.div`
max-width: 700px;
`

const StyledReviews = styled.div`
	font-family: 'Lato';
	font-weight: 700;
	font-size: 13px;
	letter-spacing: 0.9px;
	color: #14b6ad;
	cursor: hand;
`
const SearchSort = styled.div`
	display: flex;
	max-width: 700px;
	justify-content: space-between;
`
const StyledReviewsCount = styled.div`
	display: inline-block
	font-family: 'Lato';
	font-weight: bold;
	font-size: 14px;
	letter-spacing: 0.9px;
	color: #14b6ad;
	margin-left: 6px;
	min-width: 20px;
	background: #eefaf9;
	border-radius: 3px;
	padding: 2px;
	cursor: hand;
	text-align: center;
	`


const ReviewsCommentsBlock = styled.div`
	max-width: 500;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      // currentItem: ''
    }
    this.getReviews = this.getReviews.bind(this)
    this.submitReply = this.submitReply.bind(this)

  }

  componentDidMount() {
    let itemname = window.location.pathname.split('/')[2]
    this.getReviews(itemname)
  }

  getReviews(itemname) {
    axios.get(`/api/items/${itemname}/reviews`)
      .then(response => {
        this.setState({ reviews: response.data })
      })
      .catch(error => console.log('Error getting all reviews from DB:    ', error))
  }

  submitReply(reviewId, commentObj) {
    console.log('submitting reply with', reviewId, commentObj)
    this.setState()
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
      <OuterWrapper>

        <StyledReviews>REVIEWS  <StyledReviewsCount>{this.state.reviews.length}</StyledReviewsCount></StyledReviews>
        <SearchSort>
          <Search />
          <Sort />
        </SearchSort>
        <ReviewsCommentsBlock>


          <Reviews reviews={this.state.reviews} submitReply={this.submitReply} />

        </ReviewsCommentsBlock>

      </OuterWrapper>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
