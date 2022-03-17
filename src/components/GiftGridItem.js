import React from 'react'

export const GiftGridItem = ({ id, title, url}) => {  //usamos desesctrurizacion para obtener los datos que nesecitamos del json
    console.log({id,title,url});
  return (
    <div className="card animate__animated animate__fadeIn">
        <img src={ url } alt={title} />
        <p>{title}</p>
    </div>
  )
}
