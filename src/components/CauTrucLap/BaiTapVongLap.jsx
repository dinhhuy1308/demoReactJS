import React, { Component } from 'react'
import data from '../../data/data.json'

export default class BaiTapVongLap extends Component {
    state = {
        mangPhim: data,
    }

    renderMangPhim = () => {
        return this.state.mangPhim.map((item, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={item.hinhAnh} alt={item.biDanh} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <p className="card-text">{item.moTa}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.renderMangPhim()}
                </div>
            </div>
        )
    }
}
