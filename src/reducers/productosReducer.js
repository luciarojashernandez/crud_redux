//se importan los types
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    OBTENER_PRODUCTO_ELIMINAR_EXITO,
    OBTENER_PRODUCTO_ELIMINAR_ERROR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
} from '../types';

//cada reducer tiene su propio state
const initialState ={
    productos:[],//valor inicial, 
    error: null,
    loading: false,
    productoeliminar: null
}

/*el reducer siempre es una función (se le pasa un state o default el state inicial)
 * el store le pasa el state y la acción
*el reducer es un switch (en el action siempre se pasa el type
*el switch siempre va a tener los casos*/
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                laoding: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload] //es el payload que viene de action
            }
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoeliminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                //modificar productos
                productos: state.productos.filter(producto => producto.id !==
                    state.productoeliminar),
                productoeliminar: null, //ya se uso, entonces se elimina

            }
        default:
            return state;
    }
}