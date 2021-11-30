import {getData} from '../api/api';

const SET_PRODUCT_LIST = 'test-app/product-data-reducer/SET-PRODUCT-LIST';

const initialState = {
    productList: []
};

const productDataReducer = (state = initialState, action) => {
    const type = action.type;

    switch (type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: [...action.payload.productList]
            };
        default:
            return state;
    }
}

export const setProductList = (productList = []) => ({type: SET_PRODUCT_LIST, payload: {productList}});

export const showProductList = () => {
    return async (dispatch) => {
        const items = await getData('/productList');
        dispatch(setProductList(items));
    };
}

export default productDataReducer;