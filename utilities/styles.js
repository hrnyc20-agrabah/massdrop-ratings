/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Search } from 'styled-icons/feather/Search';
import { Close } from 'styled-icons/material/Close';
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown';
import { Octoface } from 'styled-icons/octicons/Octoface';
import { PersonAdd } from 'styled-icons/material/PersonAdd';
import { GroupAdd } from 'styled-icons/material/GroupAdd';
import { ThumbUp } from 'styled-icons/material/ThumbUp';
import { Reply } from 'styled-icons/material/Reply';

export const Style = {
  // test SVG placeholder
  TealOctoFace: styled(Octoface)`
    display: inline-block;
    vertical-align: middle;
    max-width: 32px;
    max-height: 32px;
    border-radius: 50%;
    border: 1px solid #d9dede;
    cursor: pointer;
  `,
  // Outer wrapper for the whole App
  AppOuterWrapper: styled.div`
    display: block;
    -webkit-font-smoothing: antialiased;
    max-width: 700px;
    font-family: 'Lato';
  `,
  // X image
  GrayCloseIcon: styled(Close)`
    display: inline-block;
    color: gray;
    height: 1.5em;
    margin: 5px;
  `,
  // Wrapper for Search, Sort components
  SearchSortWrapper: styled.div`
    display: flex;
    font-family: 'Lato';
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
  `,
  // Wrapper for SORT BY, selected sort option, dropdown arrow, sort options list
  SortInput: styled.div`
  position: relative;
    float: right;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    outline: none;
    position: relative;
    font-family: 'Lato';
    font-size: 12px;
    font-weight: 700;
    margin: 5px;
    height: 33px;
    min-width: 205px;
    width: 50%;
    border-radius: 3px;
    border: solid thin #d9dede;
    outline: none;
    &:hover * {
      color: #14b6ad;
    };
    cursor: pointer;
    align-items: center;
  `,
  // SORT BY element
  SortBy: styled.div`
    display: inline;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 8px;
    color: #a9a9a9;
    font-weight: 500;
  `,
  // selected option element
  SortOption: styled.div`
    display: inline;
    cursor: pointer;
    color: #a9a9a9;
    &: hover {
      font-weight: 900;
    }
  `,
  // arrow down image
  GrayArrowDown: styled(KeyboardArrowDown)`
    display: inline-block;
    cursor: pointer;
    color: gray;
    height: 2em;
    position: absolute;
    top: 1px;
    right: 4px;
    padding-top: 5px;
    vertical-align: text-top;
  `,
  // options list
  SortList: styled.button`
    display: block;
    outline: none;
    position: absolute;
    cursor: pointer;
    font-color: #d9dede !important;
    top: 40px;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: solid thin #d9dede;
    box-shadow: 0 2px 3px 0 rgba(4, 43, 40, 0.1);
    vertical-align: middle;
    &: hover {
      border: solid thin #14b6ad !important;
      color: #14b6ad;
    }
  `,
  // magnifying glass for Search
  GraySearchIcon: styled(Search)`
    display: inline-block;
    color: gray;
    height: 1.5em;
    margin: 5px;
    &: hover {
      color: #14b6ad;
    }
    &: active {
      color: #14b6ad;
    }
  `,
  SearchWrapper: styled.div`
    display: flex;
    min-width: 304px;
    border-radius: 3px;
    height: 33px;
    border: solid thin #dddddd;
    width: 50%;
    &: focus-within {
      border: solid thin #14b6ad;
      outline: none;
    }
    margin: 5px;
  `,
  SearchInput: styled.input`
    font-family: 'Lato';
    font-size: 13px !important;
    font-weight: 700;
    color: #14b6ad;
    border: 0px solid;
    width: 100%;
    margin: 5px;
    vertical-align: middle;
    outline: none;
    &: active {
      color: #14b6ad;
      font-weight: bold;
      outline: none;
    }
    :: placeholder {
      font-size: 13px;
      font-weight: 300;
      font-style: italic;
      vertical-align: middle;
      color: #dddddd;
    }
  `,
  // styles for component Reviews
  CommentWrapper: styled.div`
    min-height: 400px;
    display: flex;
    display: -webkit-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  `,
  ReviewsCommentsWrapper: styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-left: 9px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px;
    padding-top: 10px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.09);
    margin-right: 10px;
    border-radius: 4px;
    border: solid thin #d9dede;
  `,
  // styles for component Review

  ReviewCard: styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: ms-flexbox;
    display: flex;
    flex-wrap: wrap
    line-height: 1;
    padding: 20px;
  `,
  ReviewUserDetails: styled.div`
    display: flex;
  `,
  // styles for user elements
  UserW: styled.div`
    display: flex;
    font-family: 'Lato';
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
  `,
  UserAvatar: styled.img`
    margin-right: 16px;
    border-radius: 100%;
    vertical-align: middle;
    max-width: 32px;
    max-height: 32px;
    border: 1px solid #d9dede;
    margin-top: 10px;
    cursor: pointer;
  `,
  //wrapper for username, likes count and followers
  UserDataW: styled.div`
    display: flex;
    font-family: 'Lato';
    display: flex;
    width: 100px;
    margin-bottom: 10px;
  `,
  UserName: styled.div`
    margin-left: 10px;
    font-weight: bold;
    font-size: 12px;
    &:hover {
      color: #18d7cc;
    }
    cursor: pointer;
  `,
  UserLikesCount: styled.div`
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
    margin-left: 10px;
    margin-right: 0;
  `,
  TealPersonAdd: styled(PersonAdd)`
    color: #14b6ad;
    height: 1.5em;
    margin-left: 10px;
    &:hover {
      color: #18d7cc;
    }
    cursor: pointer;
  `,
  TealGroupAdd: styled(GroupAdd)`
    color: #14b6ad;
    height: 1.5em;
    margin-left: 10px;
    &:hover {
      color: #18d7cc;
    }
    cursor: pointer;
  `,
  UserDate: styled.div`
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    line-height: 20px;
    padding-top: 5px;
  `,
  isVerified: styled.div`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: left;
    padding-top: 5px;
    padding-left: 44px;
    padding-bottom: 10px;
    line-height: normal;
  `,
  ReviewBody: styled.div`
    display: inline-block;
    margin-left: 30px;
    padding-top: 3px;
    padding-left: 34px;
  `,
  // styles for component Comment
  // styles for component ReviewsTab
  ReviewsTabWrapper: styled.div`
    display: flex;
    position: -webkit - sticky;
    position: sticky;
    background: white;
    top: 0;
    border-bottom: thin solid #d3d3d3;
    font-size: 12px;
    color: #14b6ad;
    letter-spacing: 0.9px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  `,
  ReviewsTab: styled.div`
    display: flex;
    &: active {
      color: #14b6ad;
      padding-bottom: 5px;
      border-bottom: medium solid #14b6ad;
    }
  `,
  Reviews: styled.span`
    font-family: Lato;
    min-width: 50px;
    max-width: 100px;
    font-weight: 500;
    letter-spacing: 0.9px;
    color: rgb(136, 147, 146);
    &: hover {
      color: #18d7cc;
      cursor: pointer;
    }
  `,
  ReviewsCount: styled.span`
    font-weight: bold;
    margin-left: 6px;
    min-width: 20px;
    background: #eefaf9;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    padding: 2px 1px 2px 1px;
  `,
};
// module.exports: {
//   AppOuterWrapper,
// };
