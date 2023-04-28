import React, { Component } from 'react'

export default class DataBinding extends Component {
    hoTen = 'Nguyễn Văn A';
    lop = 'Frontend';
    tenTrungTam = 'CyberSoft'

    renderThongTinSinhVien = (tenTrungTam) => {
        return (
            <ul>
                <li>Họ Tên: {this.hoTen}</li>
                <li>Lớp: {this.lop}</li>
                <li>Trung tâm: {tenTrungTam}</li>
            </ul>
        )
    }

    render() {
        const tenTrungTam = 'CyberSoft DN007'

        return (
            <div className="container">
                {this.renderThongTinSinhVien(tenTrungTam)}
            </div>
        )
    }
}
