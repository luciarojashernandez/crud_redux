import React from 'react'

function EditarProducto() {
    return (
    
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>
                        <form>
                        <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre producto"
                                    name="nombre">
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Precio de producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio producto"
                                    name="precio">
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
//cambiso
export default EditarProducto
