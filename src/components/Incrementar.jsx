import React from "react";

export const Incrementar = React.memo(({ incrementar }) => {
    console.log("Me estoy redibujando");
  
    return <button onClick={() => incrementar(10)}>+1</button>;
  });