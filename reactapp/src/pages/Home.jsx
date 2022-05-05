import "./styles.css"
import Card from "../componentes/card"
import React, { useState, useEffect } from "react"

function Home() {
    const [Name, setName] = useState("")
    const [Student, setStudent] = useState([])
    const [User, setUser] = useState({name:"", avatar:""})



  useEffect(() => {
    fetch('https://api.github.com/users/VICTORGCOSTA')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])
  
  

  function handleStudent(){
    const newStudent = {
      Name: Name,
      Time: new Date().toLocaleTimeString('pt-br',{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }
    setStudent (prevState => [...prevState, newStudent])
  }

  return (
    <div className="container">

      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{User.name}</strong>
          <img src={User.avatar} alt="foto" />
        </div>
        
      </header>
        

        <input 
        type="text" 
        name="input" id="input"
        placeholder="Digite um nome"
        onChange={e => setName(e.target.value) }
        />

        <button onClick={handleStudent}>Adicionar</button>
        {
          Student.map(a =>( 
          <Card  
          key={a.Time}
          name={a.Name} 
          Time={a.Time}
          />
          ))
        }
    </div> 

  )
}

export default Home
