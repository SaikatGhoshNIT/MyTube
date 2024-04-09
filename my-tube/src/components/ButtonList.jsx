import React from 'react'
import Button from './Button'

function ButtonList() {
  const list = ["All", "Live", "Cricket", "Best For You", "Cooking", "Virat", "Messi", "News", "Election"]
  return (
    <div className="flex">
      {list.map(listItem => (<Button name={listItem}/>))}
    </div>
  )
}

export default ButtonList