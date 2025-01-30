const express = require('express')

const routes = express.Router()

const multer = require('multer');
const { addPage, viewPage, insertRecord } = require('../controllers/crudController');

routes.get('/',addPage)
routes.get('/view',viewPage)

const st = multer.diskStorage({
    destination:(req,res,cb) => {
        cb(null,'uploads')
    },
    filename : (req,file,cb) => {
        const uniq = Math.floor(Math.random() *10000);
        cb(null,`${file,fieldname}-${uniq}`)
    }
})

const fileUpload = multer({storage:st}).single('avatar');

routes.post('/insertRecord',fileUpload,insertRecord)

module.exports = routes