const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `DB Connected successfully at: ${dbConnection.connection.host}`
    );
  } catch (error) {
    console.log(`error while connecting db: ${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB };
