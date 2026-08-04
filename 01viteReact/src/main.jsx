import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Hello I am Shourya</h1>
        </div>
    )
}

// const reactElement = { // its not working like MyApp function 
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Hello Coders!"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com', 
        target: '_blank'
    },
    'Click me to visit Google!',
    // anotherElement 
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    // <App />
    // App()
    // anotherElement
    reactElement
)
