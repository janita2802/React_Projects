import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const AddValue = (()=>{
    if(count<10) setCount(count + 1);
    if(count == 10) alert("You reached the limit!");
    // setCount((prev)=>prev+1); //No curly braces as it is not returning anything
    // setCount((prev)=>prev+1);
  });

  const SubtractValue = (() =>{
    if(count>0) setCount(count - 1);
    if(count == 0) alert("Value should be greater than 0!");
  })


  return (
    <div className='bg-black p-6 flex justify-center flex-col items-center h-screen' > 
      <h1 className='text-purple-600 font-bold text-3xl mb-10'> Counter App  From 0 To 10</h1>
      <p  className='text-white  mt-10 mb-16 bg-purple-400 p-4 w-fit text-xl font-semibold rounded-lg'>Count: {count}</p>
      
      <button 
      className=" px-6 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200
       hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none 
       focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 flex-row"
      onClick={AddValue}>Increase</button>
      <span className='p-6'/>

      <button
      className="px-6 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200
       hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2
        focus:ring-purple-600 focus:ring-offset-2"
       onClick={SubtractValue}>Decrease</button>
    </div>
  )
}

export default App
