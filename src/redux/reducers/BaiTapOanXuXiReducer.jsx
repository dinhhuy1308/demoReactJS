const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanXuXi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/gameOanXuXi/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/gameOanXuXi/bao.png', datCuoc: false }
    ],
    ketQua: 'Bạn đã Thắng',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/gameOanXuXi/keo.png' }
}

const BaiTapOanXuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.ma) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate
            return { ...state }
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3)
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]

            state.computer = quanCuocNgauNhien

            return { ...state }
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc)
            let computer = state.computer

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hòa nhau !!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'thua sml !!!'
                    } else {
                        state.soBanThang += 1
                        state.ketQua = 'thắnggggg !!!'
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1
                        state.ketQua = 'thắnggggg !!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'hòa nhau !!!'
                    } else {
                        state.ketQua = 'thua sml !!!'
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'thua sml !!!'
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1
                        state.ketQua = 'thắnggggg !!!'
                    } else {
                        state.ketQua = 'hòa nhau !!!'
                    }
                    break;

                default: 

            }

        state.soBanChoi += 1
            return { ...state }
        }


        default:
            return { ...state }

    }
}

export default BaiTapOanXuXiReducer;
