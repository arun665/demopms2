const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/pms', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
var conn=mongoose.connection;

const employeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },

    email: {
        type:String,
        required:true,
        index:{
            unique:true
        }
    },

    password: {
        type:String,
        required:true,
       

    },
    
    date:{
        type:Date,
        default:Date.now
    }

 

  })

  const userModel = mongoose.model('users', employeeSchema);

  module.exports=userModel;
