import React, { Component } from 'react'

//Kết nối redux
import {connect} from 'react-redux'

class ModalGioHangRedux extends Component {
    renderGioHang = () => {
        //this.props.gioHang là thuộc tính nhận từ redux
        return this.props.gioHang.map((spGH,index) => {
            return (
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>
                    <td> <img src={spGH.hinhAnh} alt="" width={75} height={100} /></td>
                    <td>{spGH.giaBan}</td>
                    <td>
                        <button onClick={()=>this.props.tangGiamSoLuong(index,true)}>+</button>
                        {spGH.soLuong}
                        <button onClick={()=>this.props.tangGiamSoLuong(index,false)}>-</button>
                    </td>
                    <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                    <td><button className="btn-danger" onClick={()=>this.props.xoaGioHang(spGH.maSP)}>Xóa</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.renderGioHang()}</tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}></td>
                            <th>Tổng tiền:</th>
                            <td>{this.props.gioHang.reduce((tongTien,spGH) => {
                                return tongTien += spGH.soLuong * spGH.giaBan
                            },0).toLocaleString()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG',
                maSP
            }
            dispatch(action)
        },

        tangGiamSoLuong: (index,tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                index,
                tangGiam
            }
            dispatch(action)
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ModalGioHangRedux)
