import './App.css'
import {useState} from "react";
import  {ComponentAppChild} from "./ComponentAppChild"

const ComponentApp = () => {
    const [categories, setCategories] = useState([])

    const [value,setValue] = useState("")

    const handleAdd = () => {
        const newCategory = {
            id: categories.length +1,
            name: value
        }
        setCategories([...categories, newCategory])
        setValue('')
    }

    return (
        <>  
            <div>
                <input placeholder='Escribe una categoría' value={value} onChange={(e) => setValue(e.target.value)}/>
                <h2>Lista de Categorías</h2>
                {
                    categories.length === 0 ?
                    (
                        <p>No hay categorías añadidas.</p>
                    )
                    :
                    <ul>
                        {
                            categories.map((category, idx) =>(
                                <li key={idx}>{category.name}</li>
                            ))
                        }
                    </ul>
                }
                <ComponentAppChild onCallParentFn={handleAdd} />
            </div>
        </>
    )
}

export default ComponentApp