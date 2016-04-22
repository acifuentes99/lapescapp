//Productor
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productor_schema = new Schema({
    //_id: {type: String },
    name: { type: String },
    loc : { lng : Number , lat : Number },
    date_:  Date 
});

productor_schema.pre('save', function(next){
  var doc = this;
  doc.date_ = new Date();
  next();
  });

var Productor = mongoose.model('productor', productor_schema);
module.exports = Productor;
