const INITIAL_STATE = {
    id: 0,
    username: '',
    email: '',
    role: ''
};

export const userReducer = (state = INITIAL_STATE, action) => {
    // action menerima 2 buah property ---> type dan payload
    console.log("Data dari fungsi action ==>", action);
    switch (action.type) {
        case "LOGIN_SUCCESS":
            // memperbarui data pada state dengan data dari action.payload
            return { ...state, ...action.payload };
        case "LOGOUT":
            return INITIAL_STATE;
        default:
            return state;
    }

}