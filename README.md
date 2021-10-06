Hay un store que va a tener mútiples reducers
Cada parte de la app va a tener su reducer y cada reducer su state
para más de un reducer usar {combine reducer}
Los datos van a fluir desde el provider con store como parámetro


*Types: describen lo que pasa en la app
*Dispatch: función que toma otra función (manda a ejecutar esa función).
            se usa para mandar llamar las funciones de los actions


- types describen lo que pasa en la app
- en action hay función que se debe usar en el componente/los datos del componente se pueden pasara a las acciones
- dispatch para ejecutar esas acciones