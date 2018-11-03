var express = require("express");
var request = require("request");
var mongo = require("./db.js");
var app = express();

app.get("/getinfo", function(req, res) {
    var id = req.query.id;
    res.append("Access-Control-Allow-Origin", "*");
    if(id!==undefined){
        request('https://www.smartisan.com/product/skus?ids='+id+'&with_stock=true&with_spu=true', function(err, response, body) {
            res.send(body)
        })
    }else{
        request('https://www.smartisan.com/product/skus?ids=100051708,100046401,100040609,100047901,100035113,100040501,100055007,100033802,100027002,100027001,100027004,100051704,100051801,100051901,100052801,100053001,100047302,100052401,100052001,100052101,100052201,100052301,100051702,100046401,100040609,100035101,100047902,100046702,100041901,100041801,100042101,100041701,100042001,100036002,100035201,100045201,100038001,100042201,100047301,100047001,100047401,100042802,100037801,100022803,100023501,100049901,100049801,10004 7701,100047101,100042601,100042205,100040501,100033802,100036501,100036401,100036320,100035705,100055007,100054901,100053623,100053911,100037739,100039731,100043305,100043828,100026421,100026110,100041020,100043809,100025426,100025508,100040910,100033909,100037611,100051201,100041201,100050601,100042301,100050801,100050403,100050301,100022201,100054301,100053101,100032201,100022901,100050901,100045803,100050405,100040401,100041601,100032401&with_stock=true&with_spu=true', function(err, response, body) {
        res.send(body)
    })
    }
    
})

app.get("/regit", function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    console.log(username,password)
    res.append("Access-Control-Allow-Origin", "*");
    if(username!==undefined&&password!==undefined){
        mongo.insert("user",{username:username,password:password});
        res.send("success");
    }else{
        res.send("fail");
    }
})
app.get("/login", function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    res.append("Access-Control-Allow-Origin", "*");
    if(username!==undefined&&password!==undefined){
        mongo.search("user",username,function(pw){
            for(var i=0;i<pw.length;i++){
                if(pw[i].password===password){
                    res.send("success");
                    return;
                }
            }
            res.send("fail");
        });
    }else{
        res.send("fail");
    }
})
app.get("/cart", function(req, res) {
    var ids = req.query.ids;
    var url = '';
    res.append("Access-Control-Allow-Origin", "*");
    if(ids!==null){
        for(var i=0;i<ids.length;i++){
            if(i===ids.length-1){
                url +=ids[i];
            }else{
              url +=ids[i]+',';  
          }
        }
        request('https://www.smartisan.com/product/skus?ids='+url+'&with_stock=true&with_spu=true', function(err, response, body) {
            res.send(body)
        })
    }
})

app.listen(5656)