import React from 'react'

export default function Press({ onClick,}: { onClick?: () => void; }) {
  return (
    <button
      onClick={onClick}
        className="bg-[#17CFAD] text-white px-8 py-4 rounded-2xl font-bold ex items-center gap-2 hover:shadow-lg transition-all" >
    <a 
    href="#latest-news" >
              Latest Coverage
              <span className="material-symbols-outlined text-sm  items-center justify-center flex ">arrow_downward</span>
            </a>
    </button>
  )
}
