import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className='text-center playerGame'>
                <div className="theThink">
                    <img width={100} height={100} className='mt-3' 
                    src={this.props.mangDatCuoc.find(item => item.datCuoc).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:150,height:150}} src="./img/gameOanXuXi/player.png" alt="" />
                
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index) => {
                        //Thêm viền cho item được chọn
                        let border = {}
                        if (item.datCuoc) {
                            border = {border: '3px solid orange' }
                        }

                        return <div key={index} className="col-4">
                        <button onClick={()=>{this.props.datCuoc(item.ma)}} style={border} className="btnItem">
                            <img width={50} height={50} src={item.hinhAnh} alt="" />
                        </button>
                    </div>
                    })}
                </div>
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanXuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (ma) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                ma
            })
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Player)
