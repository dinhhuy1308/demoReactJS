import React, { Component } from 'react'

export default class Phim_RCC extends Component {
    render() {
        const {hinhAnh,tenPhim,moTa} = this.props.phimProps; 

        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{tenPhim}</h4>
                    <p className="card-text">{moTa}</p>
                </div>
            </div>
        )
    }
}
