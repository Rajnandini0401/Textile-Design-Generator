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
    console.error(`❌ MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};
 
module.exports = connectDB;
