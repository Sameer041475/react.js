import {useState} from 'react'
import components from './components'
import './App.css'
const App = () =>{
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  const renderAuthButton = () =>{
    if (isLoggedIn === true){
      return <button>Logout</button>
    }
    return <button>Login</button>
  }
  return (
    <div className = 'container'>
      <h1>Hello,User</h1>
      {renderAuthButton()}
    </div>
  )
}
export default App