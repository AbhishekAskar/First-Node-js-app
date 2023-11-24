const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); // This use method will handle all the types of request not only just get request but all
app.use(shopRoutes);
app.use(contactRoutes);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
