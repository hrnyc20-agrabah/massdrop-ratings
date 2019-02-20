import React from 'react'
import styled from 'styled-components'

const StyledSort = styled.div`
		float:right;
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 700;
    color: #14b6ad;
		padding: 3px ;
		min-width: 205px;
    border-radius: 3px;
    border-style: solid;
    border-width: thin;
		border-color: #d9dede;
		&:hover {border-color: #14b6ad;};
		cursor: pointer;
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


// import React from 'react';
// import { Dropdown } from '@bit/primefaces.primereact.dropdown';

// class Example extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			citySelectItems: [
// 				{ label: 'New York', value: 'NY' },
// 				{ label: 'Rome', value: 'RM' },
// 				{ label: 'London', value: 'LDN' },
// 				{ label: 'Istanbul', value: 'IST' },
// 				{ label: 'Paris', value: 'PRS' }
// 			],
// 			city: ''
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<link
// 					rel='stylesheet'
// 					type='text/css'
// 					href='https://cdn.jsdelivr.net/npm/primereact@2.0.0-rc.1/resources/themes/nova-light/theme.css'
// 				/>
// 				<link
// 					rel='stylesheet'
// 					type='text/css'
// 					href='https://cdn.jsdelivr.net/npm/primereact@2.0.0-rc.1/resources/primereact.min.css'
// 				/>
// 				<link
// 					rel='stylesheet'
// 					type='text/css'
// 					href='https://cdn.jsdelivr.net/npm/primeicons@1.0.0/primeicons.css'
// 				/>

// 				<Dropdown
// 					style={{ width: 150 }}
// 					value={this.state.city}
// 					options={this.state.citySelectItems}
// 					onChange={e => {
// 						this.setState({ city: e.value });
// 					}}
// 					placeholder='Select a City'
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default <Example />;


export default Sort