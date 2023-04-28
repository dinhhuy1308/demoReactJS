import React, { Component } from 'react'
import ModalGioHang from './ModalGioHang'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'

export default class BaiTapGioHang extends Component {
    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        gioHang: []
    }

    themGioHang = (sanPhamChon) => {
        // B1: từ sp được chọn tạo ra sp giỏ hàng
        let spGioHang = {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
            soLuong: 1
        }

        //Kiểm tra spChon có trong gio hàng chưa
        let gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang)
        }

        this.setState ({
            gioHang: gioHangCapNhat
        })
    }

    xoaGioHang = (maSP) => {
        // let gioHangCapNhat = [...this.state.gioHang]
        // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)
        // if (index !== -1) {
            //     gioHangCapNhat.splice(index,1)
            // }


        let gioHangCapNhat = this.state.gioHang
        if (window.confirm('muốn xóa k cu')) {
            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== maSP)
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP,tangGiam) => {
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);

        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {
        const tongSoLuong = this.state.gioHang.reduce((tsl, spGH) => {
            return tsl += spGH.soLuong
        }, 0)

        return (
            <div className='container'>
                <h3 className='text-center text-success'>Bài tập giỏ hàng</h3>
                <ModalGioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <div className="text-right">
                    <span className='text-danger' style={{ cursor: 'pointer', fontSize: '17px', fontWeight: 'bold' }} data-toggle="modal" data-target="#modelId">Giỏ hàng ({tongSoLuong})</span>
                </div>
                <DanhSachSanPhamGioHang themGioHang={this.themGioHang} mangSanPham={this.mangSanPham} />
            </div>
        )
    }
}
