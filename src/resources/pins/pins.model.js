const mongoose = require('mongoose');

const pinModelSchema = mongoose.Schema({
  
  id: Number,
  board: Number,
  author: Number,
  source: String,
  urlImage: String,
  name: String,
  description:String,

});


const Pin = mongoose.model('pinModel', pinModelSchema );

const create = (pin) => {
  Pin.create(pin, function (err, docs) {
    if (err){ 
      console.log(err) 
    }
    else{ 
      console.log("Created Docs : ", docs); 
    }
  });
};

const get = async(id) => {
  let query = { 'id': id };
  return await Pin.findOne(query);
};

const all = async() => {
  return await Pin.find();
}

const remove = (id) => {
  let query = { 'id': id };
  Pin.deleteOne(
    query,
    function (err, docs) { 
      if (err){ 
        console.log(err) 
      }
      else{ 
        console.log("Deleted Doc : ", docs);
      }
  }); 
};

const update = (id, updatedpin) => {
  let query = { 'id': id };
  Pin.updateOne(
    query,
    updatedpin, 
    function (err, docs) { 
      if (err){ 
        console.log(err) 
      }
      else{ 
        console.log("Updated Docs : ", docs); 
      }
  }); 
};

module.exports = {
    create,
    update,
    remove,
    get,
    all
  };