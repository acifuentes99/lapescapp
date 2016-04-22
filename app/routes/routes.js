//'use strict'

var request = require('request');
var m_Productor = require("../models/productor.js")
var m_Producto = require("../models/producto.js")

var path = process.cwd();
//var Recentsearch = require('../models/search.js');


module.exports = function (app) {

    app.route('/')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
   
    });


    app.route('/productor')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/productor.html');
    })
    .post(function(req, res){

          var userName = req.body.name;
          var geo = {lat: req.body.lat, lng: req.body.lng}; 

        var newProductor = m_Productor({
            name: req.body.name,
            loc : { lng : req.body.lng , lat : req.body.lat },
            date:  Date
        });
        newProductor.save(function(err){
            if(err) console.log(err);
        });

          res.send('1: '+userName+'; 2: '+geo.lat+' '+geo.lng); 
    });

    //Aqui!!!!
    app.route('/producto')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/public/reg_prod.html');
    })
    .post(function(req, res){

       m_Productor.findOne({ name: req.body.productor },{'_id': 0, "__v": 0},function(err, doc){
            if(doc){

                var newProducto = m_Producto({
                    productor: req.body.productor,
                    name: req.body.nombre,
                    tipo: req.body.tipo,
                    precio: req.body.precio,
                    descr: req.body.descr,
                });

                newProducto.save(function(err){
                    if(err) console.log(err);
                });

                  res.send('Producto registrado!'); 

            }
            else if(err) console.log(err);
            else{
                res.send("No se encontro productor");
            }
       }); 

    });

    app.route('/api/productor')
    .get(function(req, res){
       m_Productor.find({},{'_id': 0, "__v": 0},function(err, doc){
            if(doc){
                res.send(doc);
            }
            else if(err) console.log(err);
            else{
                res.send("not data yet");
            }
       }); 
    });

    app.route('/api/productos')
    .get(function(req, res){
       m_Producto.find({},{'_id': 0, "__v": 0},function(err, doc){
            if(doc){
                res.send(doc);
            }
            else if(err) console.log(err);
            else{
                res.send("not data yet");
            }
       }); 
    });
 

};
