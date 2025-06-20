const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const {register,login}=require('./controller/authcontroller');
const {
    createNote,getnotes,updateNote,deleteNote}=require('./controller/notecontroller');
   const authMiddleware=require('./middleware/auth') ;
// const { getNotes } = require('./controller/notecontroller');
const app=express();
app.use(cors());
app.use(express.json());
// mongoose.connect('mongodb://localhost:27017/mern_crud',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// });
mongoose.connect('mongodb://localhost:27017/mern_crud');

app.post('/api/register',register);
app.post('/api/login',login);
app.use('/api/notes',authMiddleware);
app.post('/api/notes',createNote);
app.get('/api/notes',getnotes);
app.put('/api/notes/:id',updateNote);
app.delete('/api/notes/:id',deleteNote);
app.listen(5000,()=>console.log('server started on port 5000'));