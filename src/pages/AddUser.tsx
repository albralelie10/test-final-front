import React, { ChangeEvent,useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const AddUser = () => {

  const [userInfo,setUserInfo]=useState({
    nombre:"",
    email:"",
    password:"",
    age:0
  })
  const navigation=useNavigate()
    
  const addNewUser=async(payload:any)=>{
    try{
      const res=await fetch("https://test-final-orpin.vercel.app/users",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
      })
      if(res){
        navigation("/")
      }
    }catch(err){
      console.log(err)
    }
  }
async function handleInput(e:ChangeEvent<HTMLInputElement>){  
  const {name, value}=e.target
  
  setUserInfo({
    ...userInfo,
    [name]: name == "age" ? Number(value):value
  })
}

 async function handleSubmit(e:React.FormEvent){
  e.preventDefault()
  await addNewUser(userInfo)
 }
 
  return (
    <>
       <div>
          <form
          onSubmit={handleSubmit}
          >
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Nombre</label>
            <input 
            name="nombre"
            onChange={(e)=>handleInput(e)}
            type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
            <input
            name="email"
            onChange={(e)=>handleInput(e)}
            type="email" className="form-control" id="exampleInputEmail"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
            <input
            name="password"
            onChange={(e)=>handleInput(e)}
            type="password" className="form-control" id="exampleInputPassword"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAge" className="form-label">Age</label>
            <input
            name="age"
            onChange={(e)=>handleInput(e)}
            type="number" className="form-control" id="exampleInputAge"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}
