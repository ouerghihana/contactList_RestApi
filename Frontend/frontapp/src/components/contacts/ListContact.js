import React ,{useEffect} from 'react'
import ContactCard from './ContactCard'
import { useSelector, useDispatch } from 'react-redux'           //// Importation des hooks
//partie redux
import {setContact} from '../../store/contactSlice'      //Importation de l'action setContact du slice Redux contactSlice


//pour effectuer une requête d'API et récupérer les données de contact à partir du backend.
import {fetchAllcontact} from '../../api/contactApi'


const  ListContact=()=> {
  const contact  =useSelector(state=>state.contactElement)
 console.log('contactElement',contact)
 
 const dispatch= useDispatch()


 //partie : jiben data mel bd  :// Appel de la fonction fetchAllcontact pour récupérer les données de contact
 const getAllContact =  async() => {
const data=  await fetchAllcontact()           // Appel de la fonction fetchAllcontact pour récupérer les données de contact
console.log('les données:',data.contact)
dispatch(setContact(data.contact))

}
useEffect(()=>{getAllContact()},[])

// Fonction pour la navigation vers la page update
const gotoUpdate = (id) => {

}


  return (
    //* Boucle pour afficher chaque carte de contact *//
    <div>{
    contact.map((e)=> <ContactCard    mini={e}    getAllContact={getAllContact}  gotoUpdate={gotoUpdate}  /> )
    }
    </div>
  )
}

export default ListContact
