import React, { Component} from "react";
import './LifeCycleComponent.css';

class LifeCycleComponent extends Component {
	// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
	// Cunstructor
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		}

		console.log('constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps');
		return null
	}

	componentDidMount() {
		console.log('componentDidMount');
		
		setTimeout(() => {
			this.setState({
				count: this.state.count + 1
			})
		}, 5000)
	}

	shouldComponentUpdate(nextProps, nextState) {
		// ini digunakan untuk pengkondisian terkait perubahan state atau props.
		// kita bisa menggunakan function ini untuk menmbandingkan state sebelumnya dengan state terbaru atau props sebelumnya dengan props terbaru
		// sebelum render component dengan value terbaru
		console.log('shouldComponentUpdate');
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate');
		// return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate');
		// return null
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		return null
	}


	render(){
		console.log('render');
		return(
			<button className="btn">Component Button</button>
		)
	}
}

export default LifeCycleComponent;