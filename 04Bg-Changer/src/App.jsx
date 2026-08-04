import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  
  return (
    // Outer Div used to set BackGround Color
    <div className="w-full h-screen duration-200"
     style={{backgroundColor : color}}>

      {/* Bottom Buttons for Background Change */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        {/* Set Of buttons */}
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>


            <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
            style ={{backgroundColor : "red"}}>Red</button>


            <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
            style ={{backgroundColor : "green"}}>Green</button>


            <button 
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
            style ={{backgroundColor : "blue"}}>Blue</button>


            <button 
            onClick={() => setColor("aqua")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
            style ={{backgroundColor : "aqua"}}>Aqua</button>


            <button 
            onClick={() => setColor("bisque")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
            style ={{backgroundColor : "bisque"}}>Bisque</button>

            
            <button 
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-2xl'
            style ={{backgroundColor : "black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
