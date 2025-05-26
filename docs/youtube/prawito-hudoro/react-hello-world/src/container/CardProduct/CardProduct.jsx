import React, { Component} from "react";

class CardProduct extends Component {
	state = {
		order: 4,
		name: 'ulala'
	}

	handleCounterChange = (newOrder) => {
		this.props.onCounterChange(newOrder);
	}

	handlePlus = () => {
		this.setState({
			order: this.state.order + 1
		}, () => {
			this.handleCounterChange(this.state.order);
		})

		// this.handleCounterChange();
	}

	handleMinus = () => {

		if(this.state.order > 0){
			this.setState({
				order: this.state.order - 1
			}, () => {
				this.handleCounterChange(this.state.order);
			})
		}
	}

	render() {
		return(
				<div className="card">
					<div className="img-thumb-prod">
						<img src="https://source.unsplash.com/340x340?fried+chicken" alt="" />
					</div>
					<p className="product-title">Daging Ayam Ungkep</p>
					<p className="product-price">Rp. 20.000</p>
					<div className="counter">
						<button className="minus" onClick={this.handleMinus}>-</button>
						<input type="text" value={this.state.order} />
						<button className="plus" onClick={this.handlePlus}>+</button>
					</div>
				</div>
		)
	}
}

export default CardProduct;