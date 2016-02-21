var mongoose = require('mongoose');  // ORM
mongoose.connect('mongodb://lbnn:lbnn@ds@ds031661.mongolab.com:31661/heroku_fn6b92h8');  //set the DB to be on localhouse server in the myApp

var db = mongoose.connection;
var Tag;
var exports = module.exports;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!

  //child doc
  var TagSchema = mongoose.Schema({
    text: String
  });

  //parent doc
  // var UserSchema = mongoose.Schema({
  //   name: {type:String,index:{unique:true}},
  //   messages:[MessageSchema]
  // });


  Tag = mongoose.model('Tag',TagSchema);
  //var Message = mongoose.model('Message',MessageSchema);


  // User.remove({}, function(err) {
  //  console.log('collection removed')
  // });

  // MAY USE THIS LATER
/*  Tag.remove({}).then(function(err){
    console.log('promised remove');
  })
*/

  exports.getTags = function(){
    //must return a promise
    // console.log("inside get tags function in mongoose")

    // return Tag.find({},function(err,data){
    return Tag.find({},function(err,data){if(err){
        console.log("error found in Tag.find", err);
      }else{
        return data;
      }
    });
  }

  exports.saveTags = function(tagObj){
    //validation

    Tag.count(tagObj, function (err, count) {
      if (!count) {
        // console.log('stored', tagObj)

        var anotherTag = new Tag(tagObj);

        anotherTag.save(function(err, inputTag){
          if (err) return console.error(err);
          console.log('\n\nSaved to database: ', inputTag, "\n\n");
          return anotherTag;
        })

      }
      else {
        // Handle err.
        console.log("\n\n", tagObj, "Already Exists in this db!!!!!!  Save ignored!\n\n");
        return "Already Exists"
      }
});




    //


  }


});

