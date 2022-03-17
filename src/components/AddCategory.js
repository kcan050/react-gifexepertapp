import { useState } from "react";
import React from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {  //Manera correcta de obtener una funcion como parametros es desestructurarla

    const [inputValue, setInputValue] = useState(''); //si lo dejo vacio es undefined, si lo quiero dejar vacio tengo que poner ''
    const handleInputChange = (e) =>{
        console.log(e.target.value); //Aqui mando el valor del evento y lo muestro 
        setInputValue(e.target.value);  //Aqui actualizo el valor del hook useState
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Apretaste el submit')
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]) 
            setInputValue ('');
        }
       //callback del estado anterior de las categorias = cats
    }
  return (
      <> 
        
      <h2>{inputValue}</h2>
        <h2>AddCategory</h2>
        <form onSubmit={ handleSubmit }>
            <input type="text" value={inputValue}  //Importante, si el input quiero modificarlo tendre que usar un evento onCange 
       
            onChange={handleInputChange}
            ></input>

         </form>
     </>
  );
  
}
AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired  //Valido para que la funcion setcategories sea obligatorio
  
}