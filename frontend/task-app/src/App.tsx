import './App.css'
import { Home } from './pages/home'
import { Dashboard } from './pages/dashboard/dashboard'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LogInPage } from './pages/login/login'
import { SignUnPage } from './pages/signup'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUnPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
