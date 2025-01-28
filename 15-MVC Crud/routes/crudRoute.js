const express = require('express');

const routes = express.Router()

const multer = require('multer');
const { viewPage, addPage, insertRecord } = require('../controllers/CrudControllers');

routes.get('/',viewPage)
routes.get('/add',addPage)

const st = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        const uniq = Math.floor(Math.random()*10000);
        cb(null,`${file.filename}-${uniq}`)
    }
})

const fileUpload = multer({storage:st}).single('avatar')

routes.post('/insertrecord',fileUpload,insertRecord);