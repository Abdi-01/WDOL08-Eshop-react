
export const loginAction = (data) => {
    console.log("Data dari component ==>", data);
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}