import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
