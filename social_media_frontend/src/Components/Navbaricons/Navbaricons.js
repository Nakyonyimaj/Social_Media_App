import React from 'react'

export default function Navbaricons(props) {
    const {active,Icon} = props
  return (
    <div className='flex items-center cursor-pointer md:px-5 lg:px-10 sm:h-14 hover:bg-gray rounded-xl'>
      <Icon
      className={`h-5 text-zinc-500 outline-1 text-center sm:h-7 mx-auto  ${active && 'text-blue-500'} `
  }/>
    </div>
  )
}
