//Khởi tạo giá trị ban đầu
const stateGioHang = {
    gioHang: [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg", "soLuong": 1 },
        // { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg", "soLuong": 1 },
        // { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg", "soLuong": 1 }
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHangcapNhat = [...state.gioHang]
            let index = gioHangcapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)

            if (index !== -1) {
                gioHangcapNhat[index].soLuong += 1
            } else {
                gioHangcapNhat.push(action.spGioHang)
            }
            state.gioHang = gioHangcapNhat;
            return { ...state };
        }
        case 'XOA_GIO_HANG': {
            let gioHangcapNhat = [...state.gioHang];
            let index = gioHangcapNhat.findIndex(spGH => spGH.maSP === action.maSP);

            gioHangcapNhat.splice(action.index, 1);

            state.gioHang = gioHangcapNhat;
            return { ...state };
        }

        case 'TANG_GIAM_SO_LUONG': {
            const {index,tangGiam} = action
            let gioHangcapNhat = [...state.gioHang]

            if (tangGiam) {
                gioHangcapNhat[index].soLuong  +=1
            } else {
                if (gioHangcapNhat[index].soLuong > 1) {
                    gioHangcapNhat[index].soLuong  -=1
                } else {
                    gioHangcapNhat.splice(index,1)
                }
            }
            state.gioHang = gioHangcapNhat

            return {...state}
        }
    }

    return { ...state }
}

