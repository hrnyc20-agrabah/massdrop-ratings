/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Style } from '../../../utilities/styles';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div>
        <Style.SortInput onClick={this.toggleMenu}>
          <Style.SortBy>SORT BY:</Style.SortBy>
          <Style.SortOption>
            {this.props.sortOptions[this.props.selectedOption]}
          </Style.SortOption>
          <Style.GrayArrowDown />
          {this.state.showMenu ? (
            <Style.SortList
              value={this.props.selectedOption}
              onClick={e => this.props.changeSortOrder(e)}
            >
              {this.props.sortOptions.map(sortOption => (
                <option key={sortOption.key} value={sortOption.value}>
                  {sortOption.value}
                </option>
              ))}
            </Style.SortList>
          ) : null}
        </Style.SortInput>
      </div>
    );
  }
}

export default Sort;
