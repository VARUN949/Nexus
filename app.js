const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const productRoutes = require("./Routes/productRoute")
const app = express();
const cors = require('cors');
const MongoURL = "mongodb+srv://nexus:ZTC7kjC43MnYuMLc@cluster0.qedsvam.mongodb.net/nexus?retryWrites=true&w=majority"

const server = http.createServer(app);

mongoose.connect(MongoURL).then(() => {
    console.log('mongoose connected');
});

app.use(cors());
app.use(express.json());
app.use('/app', productRoutes);

server.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});