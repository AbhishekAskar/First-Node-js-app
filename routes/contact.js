const express = require('express');

const router = express.Router();
const contactContorller = require('../controllers/contactus')


router.get('/contactus',contactContorller.contactUsController);
router.post('/contactus', contactContorller.postContactUs);

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));  
});


module.exports = router;