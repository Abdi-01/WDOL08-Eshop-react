
export const loginAction = (data) => {
    console.log("Data dari component ==>", data);
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

export const logoutAction = () => {
    localStorage.removeItem('eshop_login')
    return {
        type: "LOGOUT"
    }
}