import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        const {data,handleDetail} = this.props

        return (
            <div className="card">
                <img className="card-img-top" src={data.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{data.tenSP}</h4>
                    <p className="card-text">{data.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={handleDetail}>Click Me</button>
                </div>
            </div>


        )
    }
}
