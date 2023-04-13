import React from 'react'

import './contactcard.css'
import { useNavigate } from 'react-router-dom'
import{deleteContact} from '../../api/contactApi'
const ContactCard = ({mini,getAllContact}) => {

  const navigate=useNavigate()
  const gotoUpdate=()=>{
    navigate(`/update/${mini._id}`)
  }


 


  return (
    <div>
    <a href="/"><button class="bn8"><i className="fa fa-home"></i> Home</button></a>
    <div className='card_body'>
    
    <div className="card">
  <div className="img-bx">
    <img src="https://t3.ftcdn.net/jpg/05/33/99/72/240_F_533997274_IrUICX6u8OL7kJghveQymmGZwYP3aRF7.webp" alt="img" />
  </div>
  <div className="content">
    <div className="detail">
      <h2>
       {mini.LastName} {mini.FirstName} 
        <br />
        <span>Age: {mini.Age}</span> <br />
        <span>Adress:{mini.Adress}</span><br />
        <span>Email:{mini.Email}</span>
        </h2>
      <ul className="sci">
        <li>
          <a href="ff">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="fab">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="de">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a href="ee">
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul>

      <button className="bn30" onClick={()=>gotoUpdate()}>Update </button>

      
      <button className="bn30"  onClick={async()=>{ await  deleteContact(mini._id);getAllContact() }} > Delete </button>      {/* on peut  const deleteContact =async()=>{
                                                                                                                                    await deleteContact(mini._id)}*/}
      
      </div>
   
  </div>
  
</div>

</div>
</div>



  )
}

export default ContactCard

