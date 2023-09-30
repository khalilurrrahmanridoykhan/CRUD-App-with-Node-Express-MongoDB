const mongoose = require('mongoose');

    const url = 'mongodb+srv://ridoykhan:RidoyKhan@cluster0.hz7suko.mongodb.net/?retryWrites=true&w=majority';

    const db = url;
    
    const connectDB = async () => {
      try {
        console.log(db);
        await mongoose.connect(`${db}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
      } catch (error) {
        console.log(error.message);
        process.exit(1);
      }
    };
    
    
    module.exports = connectDB
