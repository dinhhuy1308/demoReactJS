import React, { Component } from 'react'
import {connect} from 'react-redux'

class ThongTinTroChoi extends Component {
    render() {
        return (
            <div >
                <div className="display-4">BÀN CHỌN: <span className='text-danger'>{this.props.taiXiu ? 'TÀI' : 'XỈU'}</span></div>
                <div className="display-4">BÀN THẮNG: <span className='text-success'>{this.props.soBanThang}</span></div>
                <div className="display-4">TỔNG SỐ BÀN CHƠI: <span className='text-primary'>{this.props.tongSoBanThang}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taiXiu: state.BaiTapXucXacReducer.taiXiu,
        soBanThang: state.BaiTapXucXacReducer.soBanThang,
        tongSoBanThang: state.BaiTapXucXacReducer.tongSoBanThang
    }
}

export default connect (mapStateToProps)(ThongTinTroChoi)
