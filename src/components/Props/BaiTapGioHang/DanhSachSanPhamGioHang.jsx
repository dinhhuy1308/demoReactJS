import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang'

export default class DanhSachSanPhamGioHang extends Component {


    renderSanPham = () => {
        const { mangSanPham, themGioHang } = this.props

        return mangSanPham.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPhamGioHang themGioHang={themGioHang} sanPham={item} />
                </div>
            )
        })
    }

    render() {

        return (
            <div className='container'>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
