//colocar todos los reducers y combine
import {combineReducers} from 'redux';
import productosReducer from './productosReducer';


//puedes tener multiples reducers y cada uno su state
export default combineReducers({
    productos: productosReducer
})