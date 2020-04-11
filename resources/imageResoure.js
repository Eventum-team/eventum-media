const { Router } = require('express');
const router = Router();
const path = require('path');
const { unlink } = require('fs-extra');


const Image = require('../models/image');

router.get('/', async (req,res) =>{
    const images = await Image.find();   
    console.log(images);
    res.render('index');
});

router.get('/upload', (req,res) =>{//temporal
    res.render('upload');
});

router.post('/upload',async (req,res) =>{
    //console.log(req.file);
    const image = new Image();

    image.fieldname = req.file.fieldname;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.filename = req.file.filename;
    image.path = 'public/uploads/' + req.file.filename;
    image.size = req.file.size;

    await image.save();
    console.log(image);
    //res.send('Uploaded');
    res.redirect('/');
});

router.get('/image/:id', async (req,res) =>{
    const { id } = req.params;
    const image = await Image.findById(id);
    console.log(image);
    res.send('image identyfied by ' + id);
});

router.get('/image/:id/delete', async (req,res) =>{
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./' + image.path));
    console.log('image identyfied by ' + id + ' was deleted');
    //res.send('image identyfied by ' + id + ' was deleted');
    res.redirect('/');
});

module.exports = router;  