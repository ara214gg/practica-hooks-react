import { useForm } from "../hooks/useForm";
import { useReducer } from "react";


const initialState = [{
    id : new Date().getTime(),
    tarea : "Explicar Reduce",
    finalizado : false
}]

const tareaReducer = (state = initialState, accion = {}) =>{
    switch(accion.type){
        case "[TAREAS] Agregar Tarea":
            return [...state, accion.payload];
        
        case "[TAREAS] Finalizar Tarea":
            return state.map(tarea => {
                if(tarea.id == accion.payload.id){
                    return {
                        ...tarea,
                        finalizada : !tarea.finalizado
                    }
                } return tarea
            })

        case "[TAREAS] Eliminar Tarea":
                return state.filter(tarea => tarea.id !== accion.payload);

        case "[TAREAS] Borrar Tarea":
            return []

        default:
            break;
    }

    return state
}

export const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const {tarea, formState, onInputChange} = useForm({ tarea: "" });

    const agregarTareaForm = (event) => {
        event.preventDefault();
        if(formState.tarea == "") return

        const tarea = {
            id : new Date().getTime(),
            tarea : formState.tarea,
            finalizado : false 
        }

        const accion = {
            type : "[TAREAS] Agregar Tarea",
            payload : tarea
            
        }

        dispatch(accion);
    }


    const finalizarTarea = ({id}) =>{
        const action = {
            type : "[TAREAS] Finalizar Tarea",
            payload : id
        }
        dispatch(action);
    }


    const eliminarTarea = ({id}) =>{
        const action = {
            type : "[TAREAS] Eliminar Tarea",
            payload : id
        }

        dispatch(action);
    }

    const reset = () =>{
        const action ={
            type: "[TAREAS] Borrar Tarea",
            payload : ""
        }

        dispatch(action);
    }

  return (
    <>
        <form onSubmit={agregarTareaForm}>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="tarea" 
                    name="tarea"
                    placeholder="Ingresa tarea: "
                    value={tarea}
                    onChange = {onInputChange}
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Submit
            </button>

            <button 
                className="btn btn-danger"
                onClick={reset}
                type="button"
            >
                Reset
            </button>
        </form>
        <hr />
        <ul className="list-group">
            {state.map(item => {
                return(
                    <li key={item.id} className="list-group-item d-flex justify-content-between"> 
                        <span> {item.tarea} </span>  
                        <div>
                            <input 
                                type="checkbox" 
                                value={item.finalizado}
                                onChange={() => finalizarTarea(item)}
                            />
                            <button 
                                className="btn btn-danger"
                                onClick={() => eliminarTarea(item)}
                            >     
                                Borrar
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </>
  )
}
