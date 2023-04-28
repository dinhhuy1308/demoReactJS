import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
	render() {
		const {sanPham,themGioHang} = this.props
		return (
			<div className="card">
				<img className="card-img-top" src={sanPham.hinhAnh} width={300} height={300} />
				<div className="card-body bg-dark text-white text-center">
					<h4 className="card-title">{sanPham.tenSP}</h4>
					<button className='btn btn-success'onClick={() => themGioHang(sanPham)}>Thêm giỏ hàng</button>
				</div>
			</div>
		)
	}
}
