import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => async dispatch => {
        dispatch({

            type: ActionTypes.SET_PRODUCTS,
            payload: products,
        })

}

export const selectedProduct = (product) => async dispatch => {
    dispatch({

        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    })

}





