//se importan los types
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//la función que se usa en la vista, se le pasa un valor 

//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return (dispatch)=>{
        dispatch(agregarProducto()); //Intenta agrtegar un producto

        try {
            dispatch(agregarProductoExito(producto)); //si lo agrega, modifiva el state con el nuevo producto
        } catch (error) {
            dispatch(agregarProductoError(true));//si pasa error
        }
    }
}


//si se define una fucnión en actios, también en reducers
const agregarProducto = ()=>({
    type: AGREGAR_PRODUCTO,
})

//sie el producto se guarda en la base de datos
//*el payload se agrega al objeto porque el estado vaa cambiar
const agregarProductoExito = (producto)=>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
});

//si hubo error

const agregarProductoError=(estado)=>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})