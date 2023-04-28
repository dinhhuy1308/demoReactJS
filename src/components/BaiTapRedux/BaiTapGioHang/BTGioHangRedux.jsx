import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

export default class BTGioHangRedux extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-danger text-center'>Bài tập giỏ hàng Redux</h3>
                <ModalGioHangRedux />
                <DanhSachSanPhamRedux />
            </div>
        )
    }
}
