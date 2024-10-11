import './App.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

import { Outlet } from 'react-router-dom'

// import React, { useState } from 'react';


// function Botao() {
//   const [total, setTotal] = React.useState(0);
//   return <button onClick={() => setTotal(total + 1)}>Adicionar {total}</button>
// }

function App() {
  return (
    <>
      <Header />
      
      <main>
        {/* <h1><Botao /></h1> */}
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App