import { combineReducers, createStore } from 'redux';
import reducer from './reducers/reducer';

const reducers = combineReducers({
    todos: reducer,
});

const store = createStore(reducers);

window.state = store.getState();

export default store;