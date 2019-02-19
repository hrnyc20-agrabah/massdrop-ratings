import React from 'react';
import axios from 'axios';
import Comment from './Comment.jsx'
import ReactQuill from 'react-quill'
import styled from 'styled-components'
import moment from 'moment'
import Stars from 'react-stars'
import { PersonAdd } from 'styled-icons/material/PersonAdd'
import { GroupAdd } from 'styled-icons/material/GroupAdd'
import { ThumbUp } from 'styled-icons/material/ThumbUp'
import { Reply } from 'styled-icons/material/Reply'

const GrayReply = styled(Reply)`
	color: #849493;
	height: 1em;
`


const GrayThumbUp = styled(ThumbUp)`
display:inline-block;
	color: #849493;
	height: 1em;
	margin-left: 7px;
	padding-bottom: 3px;
	padding-left: 31px;
`

const TealPersonAdd = styled(PersonAdd)`
display: inline-block;
  color: #14b6ad;
  height: 1.5em;
  margin-left: 10px;
`
const TealGroupAdd = styled(GroupAdd)`
display: inline-block;
  color: #14b6ad;
  height: 1.5em;
	margin-left: 10px;
`

const StyledReviewCard = styled.div`
	display: block;
	font-family: 'Helvetica';
	font-weight: 300;
	font-size: 13px;
	line-height: 20px;
	color: #5b6a69;
	max-width: 500px;
	border-style: solid;
	border-width: thin;
	border-color: #D3D3D3;
	box-shadow: 0.75px 0.75px #D3D3D3;
	border-radius: 4px;
	padding: 20px;
	margin-top: 15px;
	margin-bottom: 15px;
	margin-left 10px;
`
const StyledAvatar = styled.img`
	display: inline-block;
  vertical-align: middle;
  max-width: 32px;
  max-height: 32px;
	border-radius: 50%;
	border: 1px solid #d9dede;
`
const StyledUsername = styled.div`
	display: inline-block;
	margin-left: 10px;
	font-weight: bold;
	font-size: 12px;
`
const LikesCount = styled.div`
	display: inline-block;
	font-family: 'Lato';
	font-weight: bold;
	font-size: 11px;
	text-align: center;
	min-width: 20px;
	line-height: 14px;
	letter-spacing: 0.9px;
	color: #849493;
	border: solid #d6d6d6;
	border-width: 1px;
	border-radius: 3px;
	margin-left: 5px;
	margin-right: 0;
	padding-top: 2px;
	padding-bottom: 2px;
	padding-left: 1px;
`
const StyledTime = styled.div`
	display: inline-block;
	float: right;
	vertical-align: middle;
	font-size: 12px;
	line-height: 20px;
	padding-top: 5px;
	padding-right: -4px;

`
const StyledVerified = styled.div`
	font-family: 'Lato';
	font-weight: 400;
	font-size: 12px;
	letter-spacing: 1px;
	text-align: left;
	padding-top: 5px;
	padding-left: 44px;
	padding-bottom: 10px;
	line-height: normal;
`
const StyledReviewBody = styled.div`
	display: inline-block;
	margin-left: 10px;
	paddign-top: 3px;
	padding-left: 34px;
	`
const ReplyWrapper = styled.div`
	display: inline-block;
	margin-left: 10px;
	font-size: 12px;
	font-weight: 500;
	letter-spacing: 0.95px;
	
`
const StyledActiveSubmitButton = styled.button`
	cursor: pointer;
	letter-spacing: 0.9px;
	font-family: 'Lato';
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.9px;
	color: white;
	border-color: #14b6ad;
	border-radius: 1px;
	background: #14b6ad;
	min-width: 20px;
`
const StyledDisabledSubmitButton = styled.button`
	cursor: default;
	letter-spacing: 0.9px;
	font-family: 'Lato';
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.9px;
	color: white;
	border-color: #14b6ad;
	border-radius: 1px;
	background: #14b6ad;
	opacity: .3;
	min-width: 20px;
`
const StyledCancelButton = styled.button`
  cursor: pointer;
	font-family: 'Lato';
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.9px;
	color: #849493;
	border: none;
	background: none;
	min-width: 20px;
`

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdded: false,
			comment: props.review,
			editorHtml: '',
			isEditorShown: false,
			quillPlaceholder: 'Add a reply...'
		};
	}
	// review view - each review has its comments

	render() {
		const {
			comments,
			review_author_id,
			review_body,
			review_date,
			review_id,
			review_item_id,
			review_rating,
			user_avatar,
			user_id,
			user_isDeleted,
			user_isHidden,
			user_isVerified,
			user_likesQty,
			user_name
		} = this.props.review

		return (
			<StyledReviewCard>
				<StyledAvatar src={user_avatar}></StyledAvatar>
				<StyledUsername>{user_name}</StyledUsername>
				<LikesCount>{user_likesQty}</LikesCount>
				{this.state.isAdded ? < TealGroupAdd /> : < TealPersonAdd />}

				<StyledTime>{review_date}</StyledTime>
				{user_isVerified === 1 ? (<StyledVerified>VERIFIED PURCHASER</StyledVerified>) : null}

				<StyledReviewBody>{review_body}</StyledReviewBody>
				<GrayThumbUp />
				<ReplyWrapper onClick={() => { this.setState({ isEditorShown: true }) }}>REPLY</ReplyWrapper>
				{this.state.isEditorShown ?
					(
						<div>
							<ReactQuill
								theme='snow'
								onChange={this.handleChange}
								value={this.state.editorHtml}
								modules={{
									toolbar: [
										['bold', 'italic', 'underline', 'strike'],
										[{ 'list': 'ordered' }, { 'list': 'bullet' }],
										['link', 'image']
									],
									clipboard: {
										matchVisual: false,
									}
								}}
								formats={[
									'bold', 'italic', 'underline', 'strike',
									'list', 'bullet',
									'link', 'image'
								]}
								bounds={'.app'}
								placeholder={this.state.quillPlaceholder}
							/>
							{this.state.editorHtml.length > 0 ? (<StyledActiveSubmitButton onClick={this.createComment}>SUBMIT</StyledActiveSubmitButton>) : (<StyledDisabledSubmitButton>SUBMIT</StyledDisabledSubmitButton>)}
							<StyledCancelButton onClick={() => { this.setState({ isEditorShown: false }) }}>CANCEL</StyledCancelButton>
						</div>
					) : null
				}
				{
					comments.length && comments.map((comment, key) => (
						<Comment submitReply={this.props.submitReply} comment={comment} key={comment.comment_id} />
					))
				}

			</StyledReviewCard>
		)
	}
}

/*
ReviewsList
    Review
        commentsList
            comment (2 components : 1 to display, 1 to edit comment)


*/

export default Review;
