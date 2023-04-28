const stateDefault = {
    mangSinhVien: [
        {maSV: 1, hoTen: 'Nguyen Van A', soDienThoai: '0848778009', email: 'test@gmail.com'}
    ]
}

const  QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            const mangSVUpdate = [...state.mangSinhVien,action.sinhVien]
            state.mangSinhVien = mangSVUpdate
            return {...state}
        }
            
    
        default:
            return {...state}
    }

    
}

export default QuanLySinhVienReducer