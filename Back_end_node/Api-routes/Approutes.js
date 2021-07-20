const route=require("express").Router();
const {commonGet,commonPost}=require('../Services/CommonDoc');
const {GetAllDoc}=require("../Services/GetAllDoc");
const {InsertDoc}=require("../Services/InsertDoc");
const {DeleteDoc}=require("../Services/DeleteDoc");
const {NoBodyMiddleware} =require('../Services/NoBodyMiddleware');

route.get('/all',GetAllDoc);
route.post('/insert',NoBodyMiddleware,InsertDoc);
route.post('/delete',NoBodyMiddleware,DeleteDoc);
route.get('/',commonGet);                  //common GET API
route.post('/',commonPost);                //common POST API

module.exports=route;