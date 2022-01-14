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
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

//la función que se usa en la vista, se le pasa un valor 
//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch)=>{
        dispatch(agregarProducto()); //Intenta agregar un producto

        //Alerta
        Swal.fire(
            'Correcto',
            'El producto se agregó correctamente',
            'success'
        )
        try {
            //insertar en la API
            await clientAxios.post('/productos', producto);
            //si sale bien, actualizar el state
            dispatch(agregarProductoExito(producto)); //si lo agrega, modifiva el state con el nuevo producto
        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true));//si pasa error, cambiar el state

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo ',
            })
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

//funicñon que descarga los productos de la base de datos
// no obtiene nada porque viene de la base de datos, es una petición get

export function obtenerProductosAction(){
    return async (dispatch)=>{
        dispatch(descargarProductos());


        try {
            const respuesta = await clientAxios.get('/productos');
            //console.log(respuesta);
            dispatch (descargarProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargarProductosError())
            
        }
    }
}

const descargarProductos = ()=>({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true,
})

const descargarProductosExitosa = (productos)=>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargarProductosError = ()=>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

//seleccionar y eliminar producto
export function borrarProductoAction(id){
    return async (dispatch) => {
        //esto ejecuta un dispatch
        dispatch(obtenerProductoEliminar(id));
        // console.log(id);
        try {
            await clientAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());
            //si se elimina,mostrar mensaje de ok
            Swal.fire(
                '¡Borrado!',
                'Tu producto ha sido eliminado',
                'success'
              )
        }catch (error){
            console.log(error);
            dispatch (eliminarProductoError())
        }
    }
}
const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})

const eliminarProductoError = ()=>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true,
})