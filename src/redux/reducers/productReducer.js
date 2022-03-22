import { ActionTypes } from "../constants/action-types";

const initialState = {
    products:[{

        id:1,
        type:'praveen',
        categeory:'programmer'
    }]
}
   function productReducer(state=initialState,action){
     const {type,paylode} = action;

     switch(type){
         case ActionTypes.SET_PRODUCTS:
             return  state;
             default :
             return state;
     }

 }
export default productReducer;


