import * as ReactDOMClient from 'react-dom/client'
import React, { useState } from 'react'

const rootElement = document.getElementById
('root')

const root = ReactDOMClient.createRoot
(rootElement)

const App = (props) => {
  const [contador, setContador] = useState(13)
  
  /*
  const contador = useState(0)
  const contadorValue = contador[0]
  const updateContador = contador[1]
  */

  console.log("render")

  return (
    <div>
      <h1>{contador}</h1>
      <button
       onClick={() => {
        setContador(contador + 1)
      }}
    >
        Incrementar
      </button>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)