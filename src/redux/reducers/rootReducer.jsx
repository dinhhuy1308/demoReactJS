import {combineReducers} from 'redux'
import { GioHangReducer } from './GioHangReducer'
import {BurgerReducer} from '../reducers/BurgerReduces'
import BaiTapXucXacReducer from '../reducers/BaiTapXucXacReducer'
import BaiTapOanXuXiReducer from '../reducers/BaiTapOanXuXiReducer'
import BaiTapDatVeRedeucer from '../reducers/BaiTapDatVeRedeucer'
import QuanLySinhVienReducer from '../reducers/QuanLySinhVienReducer'

//store tổng ứng dụng 
export const rootReducer = combineReducers ({
    GioHangReducer,
    BurgerReducer,
    // QuanLySinhVienReducer,
    BaiTapXucXacReducer,
    BaiTapOanXuXiReducer,
    BaiTapDatVeRedeucer,
    QuanLySinhVienReducer,
})









