import React from 'react'
import Button from './Button'

function ButtonList() {
  const list = ["All", "Live", "Cricket", "For You", "Cooking", "Virat", "Messi", "News", "Election", "Football", "JEE", "Bengali", "Biriyani", "Century", "Roast", "Sunday Suspense", "Durga Puja"]
  return (
    <div className="flex overflow-x-auto whitespace-nowrap ">
      {list.map(listItem => (<Button name={listItem}/>))}
    </div>
  )
}

export default ButtonList