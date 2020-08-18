require('./db/db')
const {
  fetchData
} = require('./utils/api')
const Food = require('./models/Food')

const express = require('express')
const path = require('path')
const fetch = require('node-fetch')
const {
  sgMail
} = require('./utils/sendemail')
const app = express();
const bodyParser = require('body-parser')
const {
  nextTick
} = require('process')
const {
  json
} = require('express')

const port = process.env.PORT || 3000

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

let arr = []
let dow = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//body parser good to have for forms

app.use(bodyParser.json())


//setting up your public directory for your client side js and css etc
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

//good to set up views to render your ejs and whatever else!
const viewPath = path.join(__dirname, './views')

app.set('views-engine', 'ejs')
app.set('views', viewPath)

app.get('/', async (req, res) => {
  const init = await Food.deleteMany({})
  res.render('index.ejs')


})
app.get('/testingdata', async (req, res) => {
  const retrieveFood = await Food.find({})
  const xx = retrieveFood[0].title
  res.send(xx + retrieveFood.length)
})


app.post('/sendmail', async (req, res) => {
   const retrieveFood = await Food.find({})
   const message = retrieveFood
   const email = req.body.email
   let emailMessage =''
   for(i=0;i<message.length;i++){
     emailMessage +=  message[i].dow + ' - ' +message[i].title+ '<br>'
   }
   
  const msg = {
    to: email,
    from: 'twfarley88@gmail.com',
    subject: 'Sending From A Button',
    text: emailMessage,
    html: emailMessage,
  };
   sgMail.send(msg);
 
 console.log(email)
  res.render('index.ejs')

})

app.get('/getfood', async (req, res) => {
  const retrieveFood = await Food.find({})
  res.send(retrieveFood)


})

app.put('/getNewRecipe', async (req, res) => {

  const dow = req.body.dow
  console.log(dow)
  const newRecipe = await fetchData()
  res.send(newRecipe)
  console.log('new recipe:',newRecipe)
  })

app.get('/getNewfood', async (req, res) => {


  for (i = 0; i < 7; i++) {
    arr[i] = await fetchData()

  }
  console.log(arr)
  const tast = await Food.deleteMany({})
  for (i = 0; i < arr.length; i++) {
    arr[i].dow = dow[i]
    const letsGo = new Food(arr[i])
    const doc = await letsGo.save()
  }

  res.send(arr)

})




// app.post('/putdata', function(request, response){

//         //lets save the stuff from the form in an object
//     obj = {
//         name: request.body.name,
//         ingredients: request.body.ingredients
//     }

//     //now lets call this function runCode that saves everything and pass the above object
//     runCode(obj)
//     response.render('index.ejs')
//     .catch(error => { console.error(error) })
// });




// app.get('/delete',async(req,res)=>{
//     const tast = await Food.deleteMany({}) 
//     console.log(tast)
//     res.render('index.ejs')
// })


//this is how mongoose saves below here it gets called from above in the putdata and the obj also comes from there

// async function runCode(obj) {
//     const letsGo = new Food({
//       name: obj.name,
//       ingredients: obj.ingredients
//     })

//     const doc = await letsGo.save()
//     console.log(doc)
//   }



app.listen(port, () => {
  console.log('lets monGOOOOOOOOOOOOo')
})