import React from 'react'
import styled from 'styled-components'

const StyledSort = styled.div`
		display:inline-block;
		
		float:right;
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 700;
    color: #14b6ad;
    vertical-align: middle;
		padding: 3px ;
		
		width: 220px;
    height: 1.5em;
		
		margin-right: 120px;
		
    border-radius: 3px;
    border-style: solid;
    border-width: thin;
    border-color: #14b6ad;
`

class Sort extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedOption: 'NEWEST',
			options: ['NEWEST', 'HIGHEST RATED', 'LOWEST RATED', 'TOP REVIEWS'],
			showMenu: false
		}
		this.openMenu = this.openMenu.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
		this.handleSelection = this.handleSelection.bind(this)
	}

	openMenu(e) {
		e.preventDefault()
		this.setState({ showMenu: !this.state.showMenu })
	}

	closeMenu() {
		this.setState({ showMenu: false })
	}

	handleSelection(e) {
		e.preventDefault()
		this.setState({
			selectedOption: e.target.value
		})
	}

	render() {
		return (
			<StyledSort>
				<select onClick={(e) => { this.handleSelection(e) }}>
					{this.state.options.map((selectedOption, key) => (<option key={key} value={selectedOption}>{selectedOption}</option>))}
				</select>

			</StyledSort>

		)
	}

}

export default Sort