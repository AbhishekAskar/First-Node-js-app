
const rootDir = require('../util/path');
const path = require('path');

exports.contactUsController = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

exports.postContactUs  = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};