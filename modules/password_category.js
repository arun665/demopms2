const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/pms', {useNewUrlParser: true,'useFindAndModify': false, useUnifiedTopology: true,'useUnifiedTopology': true, useCreateIndex: true});
var conn=mongoose.connection;

const passwordSchema = new mongoose.Schema({
    passwordcategory:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    
    
    date:{
        type:Date,
        default:Date.now
    }

 

  })

  const passwordcategoryModel = mongoose.model('userspassword', passwordSchema);

  module.exports=passwordcategoryModel;
