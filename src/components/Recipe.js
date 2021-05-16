import React from 'react'

function Recipe({title,image,calories,ingredients}) {
    return (
        <div className="p">
            <h1 className="title">{title}</h1>
            <p className="cal">Calories: {calories}</p>
            <div className="cali">Ingredients</div>
           {ingredients.map(i=>(
                <ul>
                <li className="list" >{i.text}</li></ul>
            ))}
            <img src={image} alt="image"/>
        </div>
    )
}

export default Recipe
