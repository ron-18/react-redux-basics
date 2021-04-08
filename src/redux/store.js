import {createStore,combineReducers,applyMiddleware} from "redux";
import {cakeReducer}  from "./cake/reducer";
import {iceCreamReducer} from "./iceCream/reducer";
import {userReducer} from "./user/reducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk,logger)
);

