import React, { useState } from 'react'
import axios from 'axios'

export default function Signup() {

  const [username, setUsername] = useState('')
  const handleSubmit = () => {
      axios.get('http://localhost:8080/tester',{
        params:{'username':username}
    })
  }
  return (
    <>    
      <form onSubmit = {handleSubmit}>
          <label>Username:</label>
          <input type = "text"
                 value = {username}
                 onChange = {(e) => setUsername(e.target.value)}>
          </input>
          <button type = 'submit'>Send request</button>
      </form>

    </>
  )
}