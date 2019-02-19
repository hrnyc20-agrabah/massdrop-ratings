import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.input`
    display: inline-block;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 700;
    color: #14b6ad;
    vertical-align: middle;
    padding: 3px ;
    height: 1.5em;
    max-width: 304px;
    margin: 10px 0px 0px 10px;
    border-radius: 3px;
    border-style: solid;
    border-width: thin;
    border-color: #14b6ad;
    outline: none;
    
    ::placeholder {
        font-weight: 300;
        font-style: italic;
        font-size: 0.8em;
        color: #dddddd;
        vertical-align: middle;
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
            <div>
                <SearchContainer placeholder="Search this review discussion" onChange={this.onChange} />
            </div>
        )
    }
}

export default Search;