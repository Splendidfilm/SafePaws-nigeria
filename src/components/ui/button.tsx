import React from 'react'

function Button({type}:{type: string}) {
  return (
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#17CFAD] hover:bg-emerald-900 transition-colors text-zinc-900 hover:text-white  text-base font-bold tracking-[0.015em]">
                <span className='truncate' >{type}</span>
              </button>
  )
}

export default Button