//cada reducer tiene su propio state

const initialState ={
    productos:[],//valor inicial, 
    error: null,
    loading: false
}

/*el reducer siempre es una función (se le pasa un state o default el state inicial)
 * el store le pasa el state y la acción
*el reducer es un switch (en el action siempre se pasa el type
    *el switch siempre va a tener los casos*/
export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}