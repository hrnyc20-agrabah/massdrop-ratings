import React from 'react';
import { Style } from '../../../utilities/styles';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    return (
      <Style.SearchWrapper>
        <Style.GraySearchIcon />
        <Style.SearchInput
          placeholder="Search this review discussion"
          onChange={this.onChange}
        />
      </Style.SearchWrapper>
    );
  }
}

export default Search;
