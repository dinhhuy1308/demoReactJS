import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
	render() {
		return (
			<div className='text-center playerGame'>
				<div className="theThink">
					<img width={100} height={100} className='mt-3' src={this.props.computer.hinhAnh} alt="" />
				</div>
				<div className="speech-bubble"></div>
				<img style={{ width: 200, height: 200 }} src="./img/gameOanXuXi/playerComputer.png" alt="" />

			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanXuXiReducer.computer,
    }
}

export default connect (mapStateToProps)(Computer)
