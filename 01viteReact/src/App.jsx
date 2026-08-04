import Chai from './chai'

function App() {
  const username = "Chai aur Code"
  return (
    <>
      <h1>Chai aur react with vite | Shourya Sahu | {username}</h1> 
      {/* {username} this is caller Evaluated Expression */}
      <Chai />
    </>
  )
}

export default App
