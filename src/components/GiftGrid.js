import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { useState, useEffect } from 'react';
import { GiftGridItem } from './GiftGridItem';
//import {getGifs} from '../helpers/getGifs'
export const GiftGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const {data:images, loading} = useFetchGifs(category); //pongo data:images para renombrar data a images
    


    // useEffect(() => {
    //     getGifs(category).then( imgs => setImages(imgs) //como retorna una promesa pongo el then y actualizo el hook 
    //     //importamos getGifs de la carpeta helpers 

    //     ); //Aqui inpedimos que por cada vez que doy click a un boton evito que siga haciendo peticiones
    // }, [ category ]) //si pongo el array vacio como segundo parametro dejo que se ejecute useEffect una sola vez
    //si la categoria cambia ejecutamos otra vez useEffect, por eso le ponemos el array [category]
    
    // getGifs();
  return (
      <>
       <h3 className="card animate__animated animate__fadeIn">
            { category }
        </h3>
    { loading ? <p className="card animate__animated animate__fadeIn">Loading...</p> : null }
    <div className='card-grid '>
 
        
       
      
 
        <ol>
            {
                 images.map(gif => (
                    <GiftGridItem key={gif.id}{ ...gif } />   //Siempre acordarse de poner el id a la clave  
                    //Utilizamos el spred ... para obtener el gif

                     
                    ))

                //  images.map(gif => {
                //     return <li key={gif.id}>{gif.title}</li>

                    
                // })




                //  images.map(({id,title}) => {
                //     return <li key={id}>{title}</li>   //Otra manera de hacer lo mismo pero con desusctrarizacion

                    
                // })

            }
        </ol>

    </div>
    </>
  )
}
