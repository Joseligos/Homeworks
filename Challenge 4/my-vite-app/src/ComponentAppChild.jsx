import React from "react";

export const ComponentAppChild = ({onCallParentFn}) => {
    const letsCallParent = (evt) =>{
        onCallParentFn() 
    }
    return (
        <button onClick={(evt) => letsCallParent(evt)}>Añadir Categoría</button>
    )
}