import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Cielo', 'Pájaros']);

    const onAddCategory = () => {
        setCategories([...categories, 'Gatos']);
    }

    console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories }/>

            {/* Listado de Gif */}
        

            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) }

                
            </ol>

        </>
    )
}