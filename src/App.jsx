import React, { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
function App() {
  const [count , setCount] = useState();
  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App