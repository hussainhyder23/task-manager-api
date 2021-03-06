const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET requests are currently disabled')
//     } else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('The server is currently under maintainence')
// })

//File uploads

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb){

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('PLease upload a word document'))
//         }

//         // cb(new Error ('File must be a PDF'))
//         cb(undefined,true)


//     }
// })


// app.post('/upload', upload.single('upload') , (req, res) => {
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running on ' + port)
})

