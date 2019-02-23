import React from 'react';
import Comment from './Comment.jsx';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import Stars from 'react-stars';
import { PersonAdd } from 'styled-icons/material/PersonAdd';
import { GroupAdd } from 'styled-icons/material/GroupAdd';
import { ThumbUp } from 'styled-icons/material/ThumbUp';
import { Reply } from 'styled-icons/material/Reply';
import { Style } from '../../../utilities/styles.js';
import { timeAgo } from '../../../utilities/utilities';

const GrayReply = styled(Reply)`
  color: #849493;
  height: 1em;
  padding-bottom: 4px;
`;
const GrayThumbUp = styled(ThumbUp)`
  display: inline-block;
  color: #849493;
  height: 1em;
  margin-left: 7px;
  margin-righ: 5px;
  padding-bottom: 3px;
  padding-left: 31px;
  &:hover {
    color: #18d7cc;
  }
  cursor: pointer;
`;
const TealPersonAdd = styled(PersonAdd)`
  display: inline-block;
  color: #14b6ad;
  height: 1.5em;
  margin-left: 10px;
  &:hover {
    color: #18d7cc;
  }
  cursor: pointer;
`;
const TealGroupAdd = styled(GroupAdd)`
  display: inline-block;
  color: #14b6ad;
  height: 1.5em;
  margin-left: 10px;
  &:hover {
    color: #18d7cc;
  }
  cursor: pointer;
`;
//   < div class="review-card" >
//     <div class="user">
//       <div class="user-pic"></div>
//       <div class="user-inner-wrap">
//         <div class="user-info">
//           <div class="user-nc">
//             <div class="user-name">Jwb4467</div>
//             <div class="user-count">0</div>
//           </div>
//           <div class="user-time">5W</div>
//         </div>
//         <div class="user-status">Verified purchaser</div>
//         <div class='review-body'>lnasdlgnldfngm,sdfng,msdfng msdfngmsdfngmsdfngmsdfngmsdfngmsdfngmsdfngmsdf ngmsdfngmsdfngmsdfngmsdfngmsdfngmsdfngms dfngmsdfngmsdfngmsdfng,mnsdf,mgnsdf,m ng,msdfbg,bm dsfbn,mvn adf,mgn</div>
//       </div>

//     </div>
// </div >

const StyledTime = styled.div`
  display: inline-block;
  float: right;
  vertical-align: middle;
  font-size: 12px;
  line-height: 20px;
  padding-top: 5px;
  padding-right: -4px;
`;
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
`;
const StyledReviewBody = styled.div`
  display: inline-block;
  margin-left: 10px;
  paddign-top: 3px;
  padding-left: 34px;
`;
const StyledReviewCommentFooter = styled.div`
  display: block;
`;
const ReplyWrapper = styled.div`
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.95px;
  &:hover {
    color: #18d7cc;
  }
  cursor: pointer;
`;
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
`;
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
  opacity: 0.3;
  min-width: 20px;
`;
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
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false,
      comment: props.review,
      editorHtml: '',
      isEditorShown: false,
      quillPlaceholder: 'Add a reply...',
      isUserFollowed: false,
    };
    this.addFollower = this.addFollower.bind(this);
  }

  addFollower() {
    this.setState({ isUserFollowed: !this.state.isUserFollowed });
    // on click change state
  }
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
      user_name,
    } = this.props.review;

    return (
      // <div class="review-card">
      //   <div class="user">
      //     <div class="user-pic"></div>
      //     <div class="user-inner-wrap">
      //       <div class="user-info">
      //         <div class="user-nc">
      //           <div class="user-name">Jwb4467</div>
      //           <div class="user-count">0</div>
      //         </div>
      //         <div class="user-time">5W</div>
      //       </div>
      //       <div class="user-status">Verified purchaser</div>
      //       <div class='review-body'>lnasdlgnldfngm,sdfng,msdfng msdfngmsdfngmsdfngmsdfngmsdfngmsdfngmsdfngmsdf ngmsdfngmsdfngmsdfngmsdfngmsdfngmsdfngms dfngmsdfngmsdfngmsdfng,mnsdf,mgnsdf,m ng,msdfbg,bm dsfbn,mvn adf,mgn</div>
      //     </div>
      //   </div>
      // </div>
      <Style.ReviewCard>
        <Style.UserW>
          <Style.UserAvatar src={user_avatar} />
          <Style.UserDataW>
            <Style.UserName>{user_name}</Style.UserName>
            <Style.UserLikesCount>{user_likesQty}</Style.UserLikesCount>
            {this.state.isAdded ? (
              <Style.TealGroupAdd />
            ) : (
                <Style.TealPersonAdd />
              )}
          </Style.UserDataW>
          <Style.UserDate>{timeAgo(JSON.parse(review_date))}</Style.UserDate>
        </Style.UserW>
        {user_isVerified === 1 ? (
          <Style.isVerified>VERIFIED PURCHASER</Style.isVerified>
        ) : null}
        <Style.ReviewBody>{review_body}</Style.ReviewBody>
        <div
          onClick={() => {
            this.setState({ isEditorShown: true });
          }}
        >
          {' '}
          REPLY
        </div>
        {this.state.isEditorShown ? (
          <div>
            <ReactQuill
              theme="snow"
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={{
                toolbar: [
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['link', 'image'],
                ],
                clipboard: {
                  matchVisual: false,
                },
              }}
              formats={[
                'bold',
                'italic',
                'underline',
                'strike',
                'list',
                'bullet',
                'link',
                'image',
              ]}
              bounds={'.app'}
              placeholder={this.state.quillPlaceholder}
            />
            {this.state.editorHtml.length > 0 ? (
              <StyledActiveSubmitButton onClick={this.createComment}>
                SUBMIT
              </StyledActiveSubmitButton>
            ) : (
                <StyledDisabledSubmitButton>SUBMIT</StyledDisabledSubmitButton>
              )}
            <StyledCancelButton
              onClick={() => {
                this.setState({ isEditorShown: false });
              }}
            >
              CANCEL
            </StyledCancelButton>
          </div>
        ) : null}
        {comments.length &&
          comments.map(comment => (
            <Comment
              submitReply={this.props.submitReply}
              comment={comment}
              key={comment.comment_id}
            />
          ))}
      </Style.ReviewCard>
    );
  }
}
export default Review;
