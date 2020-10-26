import {combineReducers} from "redux";
import fetchProductsReducer from "./fetchProductsReducer";
import fetchingSparePartsReducer from "./fetchingSparePartsReducer";

export default combineReducers({
    products: fetchProductsReducer,
    spareParts: fetchingSparePartsReducer
})