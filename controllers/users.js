var User = require('../models/users'); 

exports.user_create = function(req, res, next) {
  //
  if (req.body) {
    let items = req.body
    User.create(items, function(err, newUsers){
      if(err) return res.json({ error: err });
        //res.json(newUsers) 
        res.redirect("/users");
    });
  } 
  else {
    res.json({status: 'ERROR', message: 'Debe completar todos los campos'}); //opcional mandar un mensaje de error
  }
}

//trae los usuarios de la base de datos, en este caso todos, ahora vamos a la ruta
/*exports.user_get = async function(req, res, next) {
  var users = await User.find({})
  //otra lógica
  return users;
}*/
exports.user_get = async function(req, res, next) {
  var users = await User.find({}).sort({name:1})
  //db.student.find({}).sort({name: 1})
  //otra lógica
 
 
  return users;
}
