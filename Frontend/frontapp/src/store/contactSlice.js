import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name:"contactElement",
    initialState:[ {
      
        FirstName:"Hana",
        LastName:"ouerghi",
        Age:31,
        Adress:"Jendouba",
        Email:"hanaa11@gmail.com",

        },
    {   
      
        FirstName:"mohamed",
        LastName:"saidi",
        Age:34,
        Adress:"tunis",
        Email:"med11@gmail.com",
    
    }],
 reducers:{
    setContact:(state,action)=>{
        return action.payload
    }
 }




})

export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;