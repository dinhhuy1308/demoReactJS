import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinGhe from './ThongTinGhe'
import danhSachGheData from '../../../data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe,index) => {
            return (
                <div key={index}>
                    <HangGhe  hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='bookingMovie'>
                <div className="row">
                    <div className="col-8 text-center">
                        <h2 className='text-center' style={{ color: 'orange' }}>ĐẶT VÉ XEM PHIM</h2>
                        <p className='text-white'>Màn Hình</p>
                        <div style={{marginLeft: '15%'}}>
                            {/* <div className="screen"> */}

                            {/* </div> */}
                            {this.renderHangGhe()}
                        </div>
                    </div>
                    <div className="col-4 text-white">
                        <ThongTinGhe />
                    </div>
                </div>
            </div>
        )
    }
}
