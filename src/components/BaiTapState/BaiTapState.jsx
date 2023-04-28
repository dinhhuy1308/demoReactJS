import React, { Component } from 'react'

export default class BaiTapState extends Component {

	state = {
		color: 'black'
	}

	changcolor = (color) =>{
		this.setState ({
			color: color
		})

		}
	render() {
		return (
			<div className='container'>
				<div className="row">
					<div className="col-md-6">
						<h3>Please choose your favorite about car's color</h3>
						<img src={`./img/${this.state.color}-car.jpg`} width={400} height={300}/>
					</div>
					<div className="col-md-6">
						<button onClick={() => {this.changcolor('black')}} className="btn btn-dark">Black</button>
						<button onClick={() => {this.changcolor('red')}} className="btn btn-danger">Red</button>
						<button onClick={() => {this.changcolor('silver')}} className="btn btn-secondary">Silver</button>
						<button onClick={() => {this.changcolor('steel')}} className="btn btn-info">Steel</button>
					</div>
				</div>
			</div>
		)
	}
}
