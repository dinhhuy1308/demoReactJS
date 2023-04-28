import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQuaTroChoi extends Component {
	render() {
		return (
			<div>
				<div className="text-warning display-4 text-center">{this.props.ketQua}</div>
				<div className="text-success display-4 text-center">
					Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
				</div>
				<div className="text-success display-4 text-center">
					Tổng lượt chơi: <span className="text-warning">{this.props.soBanChoi}</span>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        ketQua: state.BaiTapOanXuXiReducer.ketQua,
        soBanThang: state.BaiTapOanXuXiReducer.soBanThang,
        soBanChoi: state.BaiTapOanXuXiReducer.soBanChoi
    }
}

export default connect (mapStateToProps)(KetQuaTroChoi)

