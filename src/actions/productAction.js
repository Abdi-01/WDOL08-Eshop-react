import Axios from "axios";
import { API_URL } from "../helper";

export const getProductsAction = () => {
    return async (dispatch) => {
        try {

            let res = await Axios.get(API_URL + '/products')
            dispatch({
                type: "GET_PRODUCTS",
                payload: res.data
            });
        } catch (error) {
            console.log(error)
        }
    }
};