import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Username.length > 3 && Email.length > 5 && Password.length > 6) {

      toast("UserVerified")
    } else alert("plz fill details again")
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} id="" />
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} id="" />
          <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} id="" />
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
