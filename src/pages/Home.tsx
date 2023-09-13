    import {useState,useEffect} from "react"
    import { NavLink } from "react-router-dom"
 


    export const Home = () => {

      const [users,setUsers]=useState([])
      
      //getListof users
      const getUsers=async()=>{
        try{ 
        await fetch("https://test-final-orpin.vercel.app/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
                
        }catch(err){
          console.log(err)
        }
      }
      useEffect(()=>{
         (async()=>{
         await  getUsers() 
         })();         
      },[])
            //addnew user

     
        const deleteUser=async(id:string)=>{
          try{
            const res=await fetch(`https://test-final-orpin.vercel.app/users/${id}`,{
            method:"DELETE",
            })
          if(res)location.reload()
          }catch(err){
            console.log(err)
          }          
        }
      return (
        <div>
          <NavLink to="/add-user">
          <button 
          className='btn w-100 btn-outline-info'>
          <h5>Add new User</h5>
          </button>
          </NavLink>
         <ul>
         {users.map((item:any)=>(<li key={item.nombre}><div style={{
          border:"1px solid grey",margin:"1rem"
         }}><p>Name:{item.nombre}</p>
         <p>Id:{item._id}</p>
         <button 
         onClick={()=>deleteUser(item._id)}
         className="btn btn-sm  btn-outline-danger">Delete User</button>
         </div></li>))}
         </ul>
        </div>
      )
    }
    