import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const [inputColor, setInputColor] = useState('#FFFFFF');
  const [error, SetError] = useState(null);
  const [note, SetNote] = useState(null);

  function HandleColorChange(e){
    const value = e.target.value;
    setInputColor(value);

    if(/^#[0-9A-F]{6}$/i.test(value)){
      setColor(e.target.value);
      SetError("")
      SetNote("")
    }else{
      SetError("Invalid Input!")
      SetNote("Note- A hexadecimal color is specified with: #RRGGBB")
    }

  }


  return (
    <div className='w-full bg-slate-200 p-6 flex  place-content-center h-screen'>
      <form className='bg-violet-300 p-20 shadow-lg w-max'>
        <h1 className=' bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30%  to-pink-500 to-70% mb-16 text-transparent bg-clip-text text-center my-3 font-extrabold font-serif text-3xl'>Color Picker</h1>
        <div className='flex items-center'>
          <label className='font-semibold mx-1' htmlFor="colorinput">Enter HexaDecimal Value of color:</label>
          <input className='text-slate-700 border-2 border-black rounded-lg ml-2 px-2 w-32'placeholder="#FFFFFF" maxLength={7} id='colorinput' type='text'
            value={inputColor}
            onChange={HandleColorChange}>
          </input>
          <div className="flex flex-col items-center mx-4 my-0 ">
            <sup className='text-xs h-1 mb-1 font-bold'>Color Picker</sup>
            <sub><input className='w-10 mx-2 ' type='color' value={color} onChange={HandleColorChange}></input></sub>  
          </div>
        </div>
        <p className='text-red-600 underline my-4 text-center font-bold'>{error}</p>
        <p className='text-red-600 underline my-4 text-center font-semibold'>{note}</p>
        <div className='h-48 w-48 border-4 border-black my-20 rounded-lg mx-auto flex justify-center items-center font-semibold ' style={{backgroundColor: color}}>
          <p className='bg-yellow-100 p-1 bg-opacity-20'>Preview</p>
        </div>
      </form>
    </div>
  )
}

export default App
