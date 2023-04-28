import React, { Component } from 'react'

export default class DemoVongLap extends Component {
    state = {
        mangSanPham: [
            {maSp: 1, tenSanPham: "Iphone", gia: 1000},
            {maSp: 2, tenSanPham: "Samsung", gia: 2000},
            {maSp: 3, tenSanPham: "Huawai", gia: 3000}
        ]
    }

    renderSanPham = () =>{
        return this.state.mangSanPham.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item.maSp}</td>
                    <td>{item.tenSanPham}</td>
                    <td>{item.gia}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='bg-dark p-5 text-center text-white'>Demo Vòng Lặp</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá Sản Phẩm</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderSanPham()}</tbody>
                </table>
            </div>
        )
    }
}

