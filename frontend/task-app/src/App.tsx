import './App.css'
import { Home } from './pages/home'
import { Dashboard } from './pages/dashboard/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogInPage } from './pages/login/login'
import { SignUnPage } from './pages/signup'

import { AddTaskPage } from './pages/tasks/addTask'


import { useSelector } from 'react-redux'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/signup' element={<SignUnPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/add' element={<AddTaskPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
