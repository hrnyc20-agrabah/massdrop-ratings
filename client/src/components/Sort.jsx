/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Style } from '../../../utilities/styles';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'NEWEST',
      options: ['NEWEST', 'HIGHEST RATED', 'LOWEST RATED', 'TOP REVIEWS'],
      showMenu: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  openMenu(e) {
    e.preventDefault();
    this.setState(
      { showMenu: !this.state.showMenu },
      document.addEventListener('click', this.showMenu),
    );
  }

  handleSelection(e) {
    e.preventDefault();
    this.setState({
      selectedOption: e.target.value,
      showMenu: false,
    });
  }

  render() {
    return (
      <div>
        <Style.SortInput onClick={this.openMenu}>
          <Style.SortBy>SORT BY:</Style.SortBy>
          <Style.SortOption>{this.state.selectedOption}</Style.SortOption>
          <Style.GrayArrowDown />
        </Style.SortInput>
        <div>
          {this.state.showMenu ? (
            <Style.SortList
              value={this.state.selectedOption}
              onClick={this.handleSelection}
            >
              {this.state.options.map((selectedOption, key) => (
                <option key={key} value={selectedOption}>
                  {selectedOption}
                </option>
              ))}
            </Style.SortList>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Sort;
