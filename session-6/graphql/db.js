const mongoose = require("mongoose");
const mongourl = "mongodb://127.0.0.1:27017/tacoshop";
mongoose.connect(mongourl, { useNewUrlParser : true, useUnifiedTopology : true });