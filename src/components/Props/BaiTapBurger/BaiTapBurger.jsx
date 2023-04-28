import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBurger.css'

class BaiTapBurger extends Component {
    renderBreadMid = () => {
        let { burger } = this.props;
        // let content = []
        // for (let propBurger in burger) {
        //     // console.log(propBurger)
        //     let breadMid = [];
        //     for (let i = 0; i < burger[propBurger]; i++) {
        //         breadMid.push(<div className={propBurger}></div>)
        //     }
        //     content.push(breadMid)
        // }
        // return content


        return Object.entries(burger).map(([propBurger, value], index) => {
            let breadMid = [];
            for (let i = 0; i < value; i++) {
                breadMid.push(<div className={propBurger} key={index}></div>)
            }
            return breadMid
        })
    }

    renderMenu = () => {
        let { menu, burger } = this.props
        return Object.entries(menu).map(([propsMenu, price], index) => {
            return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button className="btn btn-success" onClick={()=>{this.props.addBreadMid(propsMenu,1)}}>+</button>
                        {burger[propsMenu]}
                        <button className="btn btn-danger" onClick={()=>{this.props.addBreadMid(propsMenu,-1)}}>-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu] * price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='display-4 text-success'>Bài tập Burger</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className='text-center text-danger'>Cửa hàng bánh Berger của bạn</h3>
                        <div className="breadTop"></div>
                        {this.renderBreadMid()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">
                        <h3 className='text-center text-success'>Chọn thức ăn</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Thức ăn</td>
                                    <td></td>
                                    <td>Đơn giá</td>
                                    <td>Thành tiền</td>
                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}></td>
                                    <th>Tổng cộng:</th>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBreadMid: (propsBurger, amount) => {
            const action = {
                type: 'ADD_BREADMID',
                propsBurger,
                amount
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BaiTapBurger)
