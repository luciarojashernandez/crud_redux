import React from "react";
import Header from "./components/Header.js";
import Productos from "./components/Productos.js";
import NuevoProductos from "./components/NuevoProductos.js";
import EditarProducto from "./components/EditarProducto.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//REDUX
import { Provider } from "react-redux"; //todos los datos de los reducers van a estar disponibles en todo el proyecto
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}> 
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProductos} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditarProducto}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
