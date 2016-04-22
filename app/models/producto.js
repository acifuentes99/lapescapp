//Producto
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prod_schema = new Schema({
    //_id: {type: String },
    productor: { type: String },
    name: { type: String },
    tipo: { type: String },
    precio: { type: Number },
    descr: {type: String },
    /*
    imagen_link: ,

    */
    date:  Date 
});

prod_schema.pre('save', function(next){
  var doc = this;
  doc.date = new Date();
  next();
  });

var Product = mongoose.model('Product', prod_schema);
module.exports = Product;
