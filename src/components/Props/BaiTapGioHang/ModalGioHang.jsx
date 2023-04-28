import React, { Component } from 'react'

export default class ModalGioHang extends Component {

    renderGioHang = () => {
        const { gioHang,xoaGioHang, tangGiamSoLuong } = this.props

        return gioHang.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item.maSP}</td>
                    <td><img src={item.hinhAnh} alt='' width={50} height={75}/></td>
                    <td>{item.tenSP}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => {tangGiamSoLuong(item.maSP,true)}}>+</button>
                        {item.soLuong}
                        <button className="btn btn-primary" onClick={() => {tangGiamSoLuong(item.maSP,false)}}>-</button>
                    </td>
                    <td>{item.giaBan.toLocaleString()}</td>
                    <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                    <td><button className='btn btn-danger' onClick={() => xoaGioHang(item.maSP)}>Xóa</button></td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ width: '800px', textAlign: 'center' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <td>Mã SP</td>
                                            <td>Hình ảnh</td>
                                            <td>Tên SP</td>
                                            <td>Số lượng</td>
                                            <td>Đơn giá</td>
                                            <td>Thành tiền</td>
                                            {/* <td></td> */}
                                        </tr>
                                    </thead>
                                    <tbody>{this.renderGioHang()}</tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan='4'></td>
                                            <td>Tổng tiền:</td>
                                            <td>
                                                {this.props.gioHang.reduce((tongTien,sp,index) => {
                                                    return tongTien += sp.soLuong * sp.giaBan
                                                },0).toLocaleString()}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
