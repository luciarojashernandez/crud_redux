import React from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

//redux
import { useDispatch } from "react-redux";
import { borrarProductoAction, obtenerProductoEditar } from "../actions/productoActions";

const Producto = ({ producto }) => {
  //el producto se pasa por props
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
  const history = useHistory(); //habilita history para redirección

  //confirmar si desea eliminarlo
  const confirmarEliminarProducto = id =>{
      //pregunatr al usuario
      Swal.fire({
        title: '¿Estás seguro de eliminar el producto?',
        text: "No será posible revertirlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#78c2ad',
        cancelButtonColor: '#ff7851',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          //pasarlo al action
          dispatch(borrarProductoAction(id)); //disp manda llamar el action
        }
      })

  }
  //función que redririge de fomra programada con useHistory
  const redireccionarEdicion = producto => {
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`);
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        {" "}
        <span className="font-weight-bold"> ${precio}</span>{" "}
      </td>
      <td className="acciones">
        <button 
          type="button"
          onClick={()=> redireccionarEdicion(producto) } 
          className="btn btn-primary mr-2">
          Editar
        </button>
        <button 
            type="button" 
            className="btn btn-danger"
            onClick={()=>confirmarEliminarProducto(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
