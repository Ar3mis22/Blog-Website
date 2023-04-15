const express = require('express');
const app = express();

//register view engine
app.set('view engine','ejs');

//listen for req
app.listen(3000,()=>
{
  console.log('Server is live on port 3000!!');
})

app.get('/',(req,res)=>{
    const blogs=[
        {title:'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iure excepturi fugit distinctio! Ab aliquid sequi, aut magnam, nemo totam alias vel praesentium voluptates esse veritatis dicta facere, eligendi minus.'},
        {title:'Mario finds stars', snippet:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iure excepturi fugit distinctio! Ab aliquid sequi, aut magnam, nemo totam alias vel praesentium voluptates esse veritatis dicta facere, eligendi minus.'},
        {title:'How to train your dragon', snippet:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iure excepturi fugit distinctio! Ab aliquid sequi, aut magnam, nemo totam alias vel praesentium voluptates esse veritatis dicta facere, eligendi minus.'},
    ]
    res.render('index',{title:"Home",blogs});
});
app.get('/about',(req,res)=>{
    res.render('about',{title:"About"});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:"Create a new blog"});
})

app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})