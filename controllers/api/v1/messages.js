const Message = require('../../../models/messages');


const getAll = (req, res) => {
    Message.find({"user": "Jasper"}, (err, docs) => {
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "messages": docs
                }
            });
        }
    }); 


}

const create = (req, res, next) => {

    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;
    message.completed = req.body.completed;
    message.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save this message"
            })
        }
        if(!err) {
            res.json({
                "status": "succes",
                "data": {
                    "message": doc
                }

            });
        }
    })


}
const update = (req, res, next) => {
    res.send("Put message");
}

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/messages";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("messages");
  var myquery = { messages: "" };
  var newvalues = {$set: {messages: "This message is updated"} };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
const remove = (req, res,next) => {
    res.send("DELETE message" + req.params.id);
}


module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;