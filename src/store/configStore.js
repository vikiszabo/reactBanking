import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default  () => {

    const enhancers = [applyMiddleware(thunk)];

    const store = createStore(rootReducer, ...enhancers);

    return store;
}