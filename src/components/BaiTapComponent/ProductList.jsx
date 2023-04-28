import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    renderSanPham = () =>{
        let {mangSanPham,xemChiTiet} = this.props;
        return mangSanPham.map((sp,index) => {
            return (
                <div className='col-3' key={index}>
                    <Product sanPham={sp} xemChiTiet={xemChiTiet}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h3 className='text-center'>BEST SMARTPHONE</h3>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}