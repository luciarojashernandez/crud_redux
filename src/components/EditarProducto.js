import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'; //slector para acceder al state/dispacth para ejecutar las aaciones
import { editarProductoAction } from '../actions/productoActions'
import { useHistory } from 'react-router-dom';

function EditarProducto() {

    const history = useHistory();
    const dispatch = useDispatch();

    //nuevo state del productp
    const [ producto, guardarProducto] = useState({
        nombre:'',
        precio: '',
    })

    //producto a editar
    const productoEditar =useSelector(state => state.productos.productoeditar);
 

    //llenar el state automáticamente con el producto editado
    useEffect(() => {
        guardarProducto(productoEditar)
    }, [productoEditar])

    //leer datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }
    
    const {nombre, precio} = producto;

    const submitEditarProducto = e =>{
        e.preventDefault();
        dispatch(editarProductoAction(producto));
        history.push('/');
    }

    return (
    
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>
                        <form onSubmit={submitEditarProducto}>
                        <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Precio de producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}>
                                </input>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Guardar cambios
                                </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
      
    )
}

export default EditarProducto
