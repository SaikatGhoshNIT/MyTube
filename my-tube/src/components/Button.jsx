import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='px-3 py-1 my-5 mx-[6px] bg-slate-400 font-semibold hover:font-bold rounded-lg active:bg-black active:text-white'>{name}</button>
    </div>
  )
}

export default Button