import { combineReducers, createStore } from 'redux';
import reducer from './reducers/reducer';

const reducers = combineReducers({
    todoState: reducer,
});

const store = createStore(reducers);

export default store;