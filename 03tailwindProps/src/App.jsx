import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Shourya Sahu",
    age: 20
  }

  let newArr = [1,3,5]


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <div className='flex gap-2 justify-center mt-2'>
      <Card username="Shourya Sahu" btnText = "Click me"/>
      <Card username ="Shivansh Sahu" btnText = "Visit me"/>
      <Card username ="Anupam Chaturvedi"/>
      </div>
    </>
  )
}

export default App
