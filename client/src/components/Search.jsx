import React from 'react'
import styled from 'styled-components'
import { Bookmark } from 'styled-icons/feather/Bookmark'


const GreyBookmark = styled(Bookmark)`
display: inline-block;
color: gray;
height: 1em;

`

const SearchContainer = styled.div`
min-width: 304px;
border-radius: 3px;
border-style: solid;
border-width: thin;
border-color: #dddddd;
&:active {
			border-color: #14b6ad;
			color: #14b6ad;
			font-weight: bold;
			outline: none; };
outline: none;
`
const SearchInput = styled.input`
    font-family: 'Lato';
    font-size: 12px;
    font-weight: 700;
		color: #14b6ad;
		border: 0px solid;
    vertical-align: middle;
		padding-bottom: 3px;
		outline: none;
    &:active {
			color: #14b6ad;
			font-weight: bold;
			outline: none; };
    ::placeholder {
			font-size: 10px;
			font-weight: 300;
			font-style: italic;
			vertical-align: middle;
			color: #dddddd;
    };
`

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = { searchQuery: '' }
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		this.setState({ searchQuery: e.target.value })
	}

	render() {
		return (
			<SearchContainer>

				<GreyBookmark />
				<SearchInput placeholder="Search this review discussion" onChange={this.onChange} />
			</SearchContainer>
		)
	}
}

export default Search;