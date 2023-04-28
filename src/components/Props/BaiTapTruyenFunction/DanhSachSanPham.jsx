import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {
    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        mangSanPham: this.mangSanPham[0]
    }

    renderPhone = () => {
        return this.mangSanPham.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPham 
                    data = {item}
                    handleDetail = {() =>{
                        const newState = {mangSanPham:item}
                        this.setState(newState);
                    }}/>
                </div>
            )
        })
    }

    render() {
        const {tenSP,hinhAnh,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom} = this.state.mangSanPham
        return (
            <div className='container'>
                <div className="row mt-3">
                    {this.renderPhone()}
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img style={{width: '100%'}} src={hinhAnh} />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>Màn hình:</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành:</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước:</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
