import React, { Component } from 'react'
import {connect} from 'react-redux'
import { datGheAction } from '../../../redux/actions/BaiTapDatVeAction';

class HangGhe extends Component {
	renderGhe = () => {
		return this.props.hangGhe.danhSachGhe.map((ghe,index) => {
			let cssGheDaDat = '';
			let disabled = false

			// Trạng thái ghế đã đặt
			if(ghe.daDat) {
				cssGheDaDat = 'gheDuocChon'
				disabled = true
			}

			//Trạng thái ghế đang đặt
			let cssGheDangDat = '';
			let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
			if (indexGheDangDat !== -1) {
				cssGheDangDat = 'gheDangChon'
			}

			return (
				<button onClick={()=>{
					this.props.datGhe(ghe)
				}} key={index} disabled={disabled} className= {`ghe ${cssGheDaDat} ${cssGheDangDat}`}>
					{ghe.soGhe}
				</button>
			)
		})
	}

	renderSohang = () => {
		return this.props.hangGhe.danhSachGhe.map((hang,index) => {
			return <button key={index} className='rowNumber'>
				{hang.soGhe}
			</button>
		})
	}

	renderHangGhe = () => {
		if (this.props.soHangGhe === 0) {
			return <div style={{marginLeft:'10px'}}>
				{this.props.hangGhe.hang} {this.renderSohang()}
			</div>
		} else {
			return <div >
				{this.props.hangGhe.hang} {this.renderGhe()}
			</div>
		}
	}

	render() {
		return (
			<div className='text-white text-left ml-5 mt-3' style={{fontSize:30}}>
				{this.renderHangGhe()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		danhSachGheDangDat: state.BaiTapDatVeRedeucer.danhSachGheDangDat
	}
}

const mapDispatchToProps = dispatch => {
	return {
		datGhe: (ghe) => {
			dispatch(datGheAction(ghe))
		}
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(HangGhe)
