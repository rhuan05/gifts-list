const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');
const adminController = require('../controller/adminController');

//Multer para upload de imagens
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});

router.get('/', homeController.renderHome);
router.post('/', homeController.reserve);

router.get('/admin', adminController.renderAdmin);
router.post('/admin', multer({storage}).single('file'), adminController.addProduct);
router.post('/admin/delete', adminController.deleteProduct);

module.exports = router;