import React,{useState} from 'react'
import './addcontact.css'
import{useNavigate} from 'react-router';
import {postContact } from '../../api/contactApi'
const Addcontact = () => {
  //pour naviguer du component update au home page
 const navigate=useNavigate()
 //fonction ajout
 const [FirstName,setFirstName]=useState('')
 const [LastName,setLastName]=useState('')
 const [Email,setEmail]=useState('')
 const [Age,setAge]=useState('0')
 const [Adress,setAdress]=useState('')
 //fct partie backend
 const handleAdd= async(value)=>{
  await  postContact(value)
  navigate('/contact')
 }

  return (
    <div><a href="/"><button class="bn8"><i className="fa fa-home"></i> Home</button></a>
    <div className='body_add'><div className="form">
    <div className="title">Welcome</div>
    <div className="subtitle">Let's create your account!</div>
    <div className="input-container ic1">
      <input id="firstname" className="input" type="text" placeholder=" " value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <div className="cut" />
      <label htmlFor="firstname" className="placeholder" >
        First name
      </label>
    </div>
    <div className="input-container ic2">
      <input id="lastname" className="input" type="text" placeholder=" "  value={LastName} onChange={(e)=>setLastName(e.target.value)} />
      <div className="cut" />
      <label htmlFor="lastname" className="placeholder">
        Last name
      </label>
    </div>
    <div className="input-container ic2">
      <input id="email" className="input" type="text" placeholder=" "  value={Email} onChange={(e)=>setEmail(e.target.value)} />
      <div className="cut cut-short" />
      <label htmlFor="email" className="placeholder"   >   Email
     
      </label>
    </div>
    <div className="input-container ic2">
    <input id="age" className="input" type="text" placeholder=" "   value={Age} onChange={(e)=>setAge(e.target.value)} />
    <div className="cut cut-short" />
    <label htmlFor="Age" className="placeholder"  >
    Age
    </label>
  </div>

  <div className="input-container ic2">
    <input id="email" className="input" type="text" placeholder=" "   value={Adress} onChange={(e)=>setAdress(e.target.value)}/>
    <div className="cut cut-short" />
    <label htmlFor="Adress" className="placeholder"          >
      Adress
    </label>
  </div>


   
    <button    type="button" className="btnAdd30"      onClick={()=>handleAdd({FirstName,LastName,Age,Adress,Email})}> Add contact </button> 
   
   
  </div>
  </div>  </div>
  )
}

export default Addcontact