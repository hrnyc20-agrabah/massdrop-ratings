import React from 'react';
import { Style } from '../../../utilities/styles';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: '' };

    this.onChange = this.onChange.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({ searchQuery: e.target.value });
    // this.setState({ searchQuery: e.target.value }, this.search(this.state.searchQuery));
  }

  clearQuery() {
    this.setState({ searchQuery: '' });
  }

  search() {
    this.props.searchFor(this.state.searchQuery);
  }

  render() {
    return (
      <Style.SearchWrapper>
        <Style.GraySearchIcon />
        <Style.SearchInput
          placeholder="Search this review discussion"
          value={this.state.searchQuery}
          onChange={this.onChange}
        />
        {this.state.searchQuery.length !== 0 ? (
          <button type="reset" onClick={this.clearQuery}>
            <Style.GrayCloseIcon />
          </button>
        ) : null}
      </Style.SearchWrapper>
    );
  }
}

export default Search;
