const express =require('express')
const app= express()
const cors =require('cors')
const port =4000
const connectdb=require('./Config/connectdb')
const ContactRoute= require('./Routes/ContactRoute')

//appel  connection db
connectdb ()

 app.use(cors())

//middleware teb3a express lehia bel affichage

app.use(express.json())


//path principale pour tous les contacts
app.use('/contact',ContactRoute)



 app.get('/',(req,res)=>{
      try{
         res.send('welcome')
     }catch(err){console.log(err)}

  })




app.listen(port,err=>{
    err? console.log(err): console.log(`go to the port =>${port}`)
})