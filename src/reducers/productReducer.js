const INITIAL_STATE = {
    products: [],
    // filterProducts: [],
};

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        default:
            return state;
    }
}