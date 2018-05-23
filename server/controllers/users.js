let users = [{
    username: 'Bobbie',
    password: '1234',
    id: 0
}]

let id = 1

module.exports = {
    // get info about a single object - GET
    read:function(req, res){
        res.send(users)
    },
    // get a whole bunch of objects - GET
    list:function(req, res){
        res.send(users);
    },

    // make a new object - POST
    create:function(req, res){
       console.log('req.body', req.body)
       users.push({username: req.body.username, password: req.body.password, id: id})
       id++;
       res.send(users);
    },

    // update an existing object - POST / PATCH
    update:function(req, res){

    },
    // delete an existing object - DELETE
    delete:function(req, res){
        usersIndex = users.findIndex( users => users.id === +req.params.id );
        users.splice(usersIndex, 1);
        res.send(users)
        
    },
}
