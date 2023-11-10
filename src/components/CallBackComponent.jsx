import { Incrementar } from "./Incrementar"
import { useCallback, useState } from "react";
//Use callback memoriza funciones


export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0);

    const incrementarPadre = useCallback(
        (val) =>{
            setCounter((contador) => contador + val);
        }, []
    );

  return (
    <>
        <h1>Contador : {counter} </h1>
        <Incrementar incrementar = {incrementarPadre} />
    </>
  )
}
