const express = require('express');
const router = express.Router();

const dbo = require('../db/db');
const ObjectId = require("mongodb").ObjectId;

router.route("/acu").get(function (req, res) {
    let db_connect = dbo.getDb("House");
    db_connect
      .collection("employee")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  router.route("/acu/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("employee")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });

  router.route("/acu/add").post( function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        image: req.body.image
    };
    db_connect.collection("employee").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

 router.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("employee").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });

  router.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();  
    let myquery = { _id: ObjectId( req.params.id )};  
    let newvalues = {    
      $set: {      
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        image: req.body.image
    }};
    db_connect.collection("employee").updateMany(myquery, newvalues, function(err, obj) {
      if (err) throw err;
      console.log("1 documents updated");
      response.json(obj);
  });
});

  module.exports = router;
