import React, { Component } from 'react'
import data from '../../data/data.json'
import Phim_RFC from './Phim_RFC'
import Phim_RCC from './Phim_RCC'

export default class DemoRoops extends Component {
    state = {
        mangPhim: data,
    }

    renderPhim = () => {
        return this.state.mangPhim.map((item,index) => {
            return (
                <div className='col-4' key={index}>
                    {/* <Phim_RFC phimProps = {item} /> */}
                    <Phim_RCC phimProps = {item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
}
