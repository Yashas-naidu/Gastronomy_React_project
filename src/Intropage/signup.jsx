import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function RegisterForm() {
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:3000/signup",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  history("/home",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }
  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531366599837-ce0c0e17657c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
            <h1 className="text-white text-3xl mb-3">Welcome to Art of Gastronomy</h1>
            <div>
              <p className="text-white">Discover delectable dishes, exciting recipes, and a world of culinary delights. Satisfy your cravings with us. </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute.
            </p>
            <form action="#">
              <div className="mt-5">
                <input type="text"  className="border border-gray-400 py-1 px-2 w-full" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
              </div>
              <div className="mt-5">
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              
              <div className="mt-5">
                
                <span>
                  Already have account?<button className="text-purple-500 font-semibold" ><Link to='/'>Signin</Link></button> 
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white" onClick={submit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
