/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Search } from 'styled-icons/feather/Search';
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown';

export const Style = {
  // styles for App.jsx (index.jsx)
  AppOuterWrapper: styled.div`
    -webkit-font-smoothing: antialiased;
    max-width: 700px;
    font-family: 'Lato';
  `,
  // styles for wrapper for components Sort, Search
  SearchSortWrapper: styled.div`
    display: flex;
    font-family: 'Lato';
    justify-content: flex-start;
    align-content: space-between;
  `,
  // styles for component Sort
  // SortWrapper: styled.div`

  // `,
  SortInput: styled.div`
    display: flex;
    flex-flow: row-wrap;
    outline: none;
    font-family: 'Lato';
    font-size: 12px;
    font-weight: 700;
    color: #14b6ad;
    padding: 5px;
    min-width: 205px;
    max-width: 205px;
    border-radius: 3px;
    border: solid thin #d9dede;
    outline: none;
    &:hover {
      border-color: #14b6ad;
    }
    cursor: pointer;
    justify-content: space-between;
    vertical-align: middle;
  `,
  SortBy: styled.div`
    vertical-align: middle;
  `,
  SortOption: styled.div`
    vertical-align: middle;
  `,
  GrayArrowDown: styled(KeyboardArrowDown)`
    display: inline-block;
    color: gray;
    height: 2em;
    float: right;
    vertical-align: middle;
  `,
  SortList: styled.button`
    display: block;
    outline: none;
    position: absolute;
    max-width: 212px;
    min-width: 212px;
    cursor: pointer;
    padding: 3px;
    border: solid thin #d9dede;
  `,
  // styles for component Search
  GraySearchIcon: styled(Search)`
    display: inline-block;
    color: gray;
    height: 1em;
    margin: 5px;
  `,
  SearchWrapper: styled.div`
    display: flex;
    min-width: 304px;
    border-radius: 3px;
    border: solid thin #dddddd;
    &: focus-within {
      border: solid thin #14b6ad;
      outline: none;
    };
  `,
  SearchInput: styled.input`
    font-family: 'Lato';
    font-size: 12px;
    font-weight: 700;
    color: #14b6ad;
    border: 0px solid;
    min-width: 250px;
    vertical-align: middle;
    padding-bottom: 3px;
    outline: none;
    &: active {
      color: #14b6ad;
      font-weight: bold;
      outline: none;
    }
    :: placeholder {
      font-size: 12px;
      font-weight: 300;
      font-style: italic;
      vertical-align: middle;
      color: #dddddd;
    }
  `,
  // styles for component Reviews
  // styles for component Review
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
