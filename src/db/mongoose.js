const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})

// const Tasks = mongoose.model('Tasks', {
//     description: {
//         type: String,
//         required:true,
//         trim:true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const ft = new Tasks({
//     description: "This is my first task",
// })

// ft.save().then(() => {
//     console.log(ft)
// }).catch((error) => {
//     console.log(error)
// })

