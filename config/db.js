// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/textileDB")
// .then(() => console.log("DB Connected ✅"))
// .catch(err => console.log(err));

// module.exports = mongoose;

const mongoose = require('mongoose');
 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`❌ MongoDB Atlas connection failed: ${error.message}`);
    console.warn('Attempting to connect to local MongoDB at mongodb://127.0.0.1:27017/textileDB');
    try {
      const localConn = await mongoose.connect('mongodb://127.0.0.1:27017/textileDB', {
        // you can add options here if needed
      });
      console.log(`✅ Local MongoDB Connected: ${localConn.connection.host}`);
    } catch (localError) {
      console.error(`❌ Local MongoDB connection failed: ${localError.message}`);
      process.exit(1);
    }
  }
};
 
module.exports = connectDB;
