import React from 'react'

export default function Activepp(props) {
    const {name , pf} = props
  return (
    <div >
        <div className='flex items-center mb-3'>
            <div className='relative'>
                <img src={pf}  className="rounded-full  w-10 h-10 mr-2" alt="profilepic"/>
                <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green z-2"></div>
            </div>
            <span>{name}</span>
        </div>
    </div>
  )
}
