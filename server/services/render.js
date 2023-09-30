const axios = require('axios');

exports.homeRoutes = (req,res)=>{

    // Makw a get request to /api/users
    axios.get('http://localhost:3030/api/users')
        .then(function(response){
            console.log(response);
            res.render('index',{users:response.data});
        })
        .catch(err=>{
            res.send(err);
        })


    // res.render('index',{user:"New Data"});
}

exports.add_user = (req,res)=>{
    res.render('add_user');
}

exports.update_user = (req,res)=>{

    axios.get('http://localhost:3030/api/users',{params:{id:req.query.id}})
        .then(function(userdata){
            res.render("update_user",{user:userdata.data})
        })
        .catch(err=>{
            res.send(err);
        })

    // res.render('update_user');
}