import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
        <Header/>
        <Outlet/>
        <ToastContainer
            autoClose={3000}
        />
    </>
  )
}

export default App
