import {combineReducers} from "redux";
import fetchProductsReducer from "./fetchProductsReducer";
import fetchingSparePartsReducer from "./fetchingSparePartsReducer";
import fetchingWorkersReducer from "./fetchingWorkersReducer";

export default combineReducers({
    products: fetchProductsReducer,
    spareParts: fetchingSparePartsReducer,
    workers: fetchingWorkersReducer
})