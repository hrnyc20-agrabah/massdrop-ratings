import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: []
		}
	}

	componentDidMount() {

	}

	render() {
		return (<div>
			<div>Ratings</div>
		</div>)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));