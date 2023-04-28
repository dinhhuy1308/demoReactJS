const stateDefault = {
    taiXiu: true,
    mangXucXac: [
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' }
    ],
    soBanThang: 0,
    tongSoBanThang: 0
}

const BaiTapXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':{
            state.taiXiu = action.taiXiu
            return { ...state }
        }
        case 'PLAY_GAME': {
            let mangXucXacNgauNhien = []
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1
                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/gameXucXac/${soNgauNhien}.png` };
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            state.mangXucXac = mangXucXacNgauNhien
            state.tongSoBanThang += 1

            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem,xucXac,index)=> {
                return tongDiem += xucXac.ma
            },0)

            if (tongSoDiem >=11 && state.taiXiu || tongSoDiem < 11 && !state.taiXiu) {
                state.soBanThang += 1
            }
            return {...state}
        }


        default:
            return { ...state }

    }
}

export default BaiTapXucXacReducer