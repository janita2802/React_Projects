import { useState } from 'react'


function BgColorChanger() {
  const [color, setColor] = useState("black");


  return (
    <div className='w-full h-screen flex flex-col justify-end' style={{backgroundColor:color}}>
      <div className='mx-auto text-center text-white text-2xl font-semibold  p-6'>Select Background Color:</div>
      <div className= 'shadow-xl mx-auto w-[90%] bg-white rounded-xl flex flex-wrap items-center justify-around my-4 py-3'>
        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black ' 
        onClick={()=>{setColor("Gray")}}
        style={{backgroundColor:"gray"}}>Gray
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("Red")}}
        style={{backgroundColor:"red"}}>Red
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("Orange")}}
        style={{backgroundColor:"Orange"}}>Orange
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("seagreen")}}
        style={{backgroundColor:"seagreen"}}>SeaGreen
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("Purple")}}
        style={{backgroundColor:"Purple"}}>Purple
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("Green")}}
        style={{backgroundColor:"Green"}}>Green
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("hotpink")}}
        style={{backgroundColor:"hotpink"}}>Pink
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("Yellow")}}
        style={{backgroundColor:"Yellow"}}>Yellow
        </button>

        <button 
        className='px-4 py-2 my-1 rounded-full text-center font-semibold text-black bg-white cursor-pointer hover:focus:ring focus:ring-black' 
        onClick={()=>{setColor("Blue")}}
        style={{backgroundColor:"Blue"}}>Blue
        </button>
      </div>
    </div>
  )
}

export default  BgColorChanger
