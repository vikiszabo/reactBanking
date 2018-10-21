import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import {loadPartners} from "./actions/partners";

export default  () => {

    const enhancers = [applyMiddleware(thunk)];

    const store = createStore(rootReducer, ...enhancers);

    store.dispatch(loadPartners());

    return store;
}