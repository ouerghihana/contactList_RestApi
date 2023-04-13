import React ,{useState, useEffect}from 'react'
import './Updatecontact.css'
import { updatecontact,getUnqContact } from '../../api/contactApi'
import { useNavigate,useParams } from 'react-router'
const UpdateContact = () => {

  //partie update
 
const {id} = useParams()
const navigate = useNavigate()
  //stocker les données du contact pour update
  const [FirstName,setFirstName]=useState('')
  const [LastName,setLastName]=useState('')
  const [Email,setEmail]=useState('')
  const [Age,setAge]=useState('0')
  const [Adress,setAdress]=useState('')
// //partie getunique
// const getContactbyId = async(contactId)=>{
//   const data= await getUnqContact(contactId)
//   console.log('data updated',data)
//   setFirstName(data.getUnquser.FirstName)
//  setLastName(data.getUnquser.LastName)
//  setEmail(data.getUnquser.Email)
//  setAge(data.getUnquser.Age)
//  setAdress(data.getUnquser.Adress)
// }
// useEffect(() => {                            // useEffect est configuré pour s'exécuter chaque fois que la valeur de la variable "id" change.
//   if(id){                                       
//   getContactbyId(id)}
  
// }, [id]);
  
  




  
//fonction update
  const handleUpdate= async(value,id)=>{               
    await  updatecontact(value,id)              // Appel à la fonction d'API pour update contact
  
   navigate('/contact')            // Redirection vers la page de liste de contacts après update
   }
  
  
  
  return (
    <div>
    <a href="/contact"><button className="bn8"><i className="fa-solid fa-address-book"></i> Liste contact</button></a>
   
    <div className='body_add'><div className="form">
    <div className="title">Welcome</div>

    <div className="subtitle">Let's update your account!</div>
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
      <input id="email" className="input" type="text" placeholder=" "  value={Email} onChange={(e)=>setEmail(e.target.value)}/>
      <div className="cut cut-short" />
      <label htmlFor="email" className="placeholder"  >
        Email
      </label>
    </div>
    <div className="input-container ic2">
    <input id="email" className="input" type="text" placeholder=" " value={Age} onChange={(e)=>setAge(e.target.value)} />
    <div className="cut cut-short" />
    <label htmlFor="Age" className="placeholder"   >
      Age:
    </label>
  </div>

  <div className="input-container ic2">
    <input id="adress" className="input" type="text" placeholder=" "   value={Adress} onChange={(e)=>setAdress(e.target.value)} />
    <div className="cut cut-short" />
    <label htmlFor="Adress" className="placeholder" >
      Adress:
    </label>
  </div>


    <button type="button" className="submit"  onClick={()=>handleUpdate(id,{FirstName,LastName,Age,Adress,Email})}>
      Update contact
    </button>
  </div>
  </div></div>
  )
}

export default UpdateContact