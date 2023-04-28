import React from 'react'

export default function Phim_RFC({phimProps,...rest}) {
    

    return (
        <div className="card">
            <img className="card-img-top" src={phimProps.hinhAnh}  />
            <div className="card-body">
                <h4 className="card-title">{phimProps.tenPhim}</h4>
                <p className="card-text">{phimProps.moTa}</p>
            </div>
        </div>
    )
}
