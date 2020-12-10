if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
};

console.log("mongodb+srv://arolson87:mniahjyw8@cluster0.7lztu.mongodb.net/portfolio?retryWrites=true&w=majority");

/* --------------------------------------------------------------------------------------*/
/* DEPENDENCIES */
/*---------------------------------------------------------------------------------------*/ 
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;

/* --------------------------------------------------------------------------------------*/
/* PORT */
/*---------------------------------------------------------------------------------------*/ 

const PORT = process.env.PORT || 3000;
const Project = require('./models/project.js');


/* --------------------------------------------------------------------------------------*/
/* MONGOOSE */
/*---------------------------------------------------------------------------------------*/ 
let MONGODB_URI = "mongodb+srv://arolson87:mniahjyw8@cluster0.7lztu.mongodb.net/portfolio?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://arolson87:mniahjyw8@cluster0.7lztu.mongodb.net/portfolio?retryWrites=true&w=majority" ,  { useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open' , ()=>{});


/* --------------------------------------------------------------------------------------*/
/* MIDDLEWARE */
/*---------------------------------------------------------------------------------------*/ 

app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


/* --------------------------------------------------------------------------------------*/
/* ROUTES */
/*---------------------------------------------------------------------------------------*/ 
app.get('/', (req, res)=> {
  res.render('static/Home')
})
app.get('/about', (req, res)=> {
  res.render('static/About')
})
app.get('/contact', (req, res)=> {
  res.render('static/ContactUs')
})
app.get('/project', (req, res) => {
  res.render('static/project')
})

/* --------------------------------------------------------------------------------------*/
/* INDEX */
/*---------------------------------------------------------------------------------------*/ 
app.get('/project', (req, res) => {
  Project.find({}, (err, allProjects) => {
    if(!err){
      console.log(allProjects)
      res.render('Index', {
        project: allProjects
      })
    } else {
      res.send(err)
    }
  })
})


/* --------------------------------------------------------------------------------------*/
/* NEW */
/*---------------------------------------------------------------------------------------*/ 
app.get('/project/new', (req, res) => {
  res.render('New');
})

/* --------------------------------------------------------------------------------------*/
/* DELETE */
/*---------------------------------------------------------------------------------------*/ 
app.delete('/project/:id', (req, res) => {
  Project.findByIdAndRemove(req.params.id, (err, foundProject) => {
    if(!err){
      res.redirect('/project')
    } else {
      res.send(err);
    }
  })
});

/* --------------------------------------------------------------------------------------*/
/* UPDATE */
/*---------------------------------------------------------------------------------------*/ 
app.put('/project/:id', (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProject) => {
    if(!err){
      res.redirect('/project')
    } else {
      res.send(err);
    }
  })
});


/* --------------------------------------------------------------------------------------*/
/* CREATE */
/*---------------------------------------------------------------------------------------*/ 
app.post('/project/:id', (req, res) => {
  Project.create(req.body, (err, createdProject) => {
      if(!err){
          res.redirect('/project/')
      } else {
          res.send(err);
      }
  })
})


/* --------------------------------------------------------------------------------------*/
/* EDIT */
/*---------------------------------------------------------------------------------------*/ 
app.get('/project/:id/edit', (req, res) => {
  Project.findById(req.params.id, (err, foundProject) => {
      if(!err){
          res.render('Edit', {
              project: foundProject
          })
      } else {
          res.send(err);
      }
  })
})


/* --------------------------------------------------------------------------------------*/
/* SHOW */
/*---------------------------------------------------------------------------------------*/ 
app.get('/project/:id', (req, res) => {
  Project.findById(req.params.id, (err, foundProject) => {
    if(!err){
      res.render('Show', {
        project: foundProject
      })
    } else {
      res.send(err);
    }
  })
})


/* --------------------------------------------------------------------------------------*/
/* localhost:3000 */
/*---------------------------------------------------------------------------------------*/  
// app.get('/' , (req, res) => {
//   res.send('Hello World!');
// });

/* --------------------------------------------------------------------------------------*/
/* LISTENER */
/*---------------------------------------------------------------------------------------*/  
app.listen(PORT, () => console.log( 'Listening on port:', PORT));