import { useState } from 'react'
import databaseImg from './assets/database.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <main>
    <section>
      <img src={databaseImg} alt="" />
      <div>
        <h1>
          Data protection
        </h1>
        <p>
          Teste
        </p>
      </div>
    </section>
   
    <footer>
      
    </footer>
  </main>
    </>
  )
}

export default App
