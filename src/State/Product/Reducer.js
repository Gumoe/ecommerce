import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PROUCT_BY_ID_FAILURE, FIND_PROUCT_BY_ID_REQUEST, FIND_PROUCT_BY_ID_SUCCESS } from "./ActionType"

const initialState={
    product:[],
    product:null,
    loading:false,
    error:null
}
export const customerProductReducer=(state=initialState, action)=>{

    switch(action.type){
        case FIND_PRODUCTS_REQUEST:
        case FIND_PROUCT_BY_ID_REQUEST:
                return{...state, loading:true,error:null}
        
        case FIND_PRODUCTS_SUCCESS:
            return{...state, loading:false,error:null,product:action.payload}       
        case FIND_PROUCT_BY_ID_SUCCESS:
            return{...state, loading:false,error:null,product:action.payload}

        case FIND_PRODUCTS_FAILURE:
        case FIND_PROUCT_BY_ID_FAILURE:
            return{...state, loading:false,error:action.payload}
        default:
            return state;  
    }

}