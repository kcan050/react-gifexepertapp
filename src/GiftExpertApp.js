import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


export const GiftExpertApp = () => {
    // const categories = ['One Punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     const naruto = 'Naruto Usumaki';
    //     setCategories( [...categories,naruto]); //El operador ... obtenemos las anteriores categorias y agregamos una nueva
    //     console.log(categories)

    // }
    return (
        <>
            {/* <button  onClick={ handleAdd }>Agregar Serie</button> */}
            <h2>GiftExpertApp</h2> 
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map(category => (
                       <GiftGrid 
                        key={category}
                       category={category} />//Siempre que recorremos un array hay que agregar el key que seria la ID
                       ))
                }
                
            </ol>
        </>);

}