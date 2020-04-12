const { Router } = require('express');
const router = Router();


const Image = require('../models/image');
const service = require('../services/imageService');

router.get('/image', (req,res) =>{
    service.getAll(req,res);
});

router.get('/image/profile', (req,res) =>{
    service.getProfile(req,res);
});

router.get('/image/profile/:id_type', (req,res) =>{
    service.getOneProfile(req,res);
});

router.get('/image/group', (req,res) =>{
    service.getAllPublic(req,res);
});

router.get('/image/group/:id_group', (req,res) =>{
    service.getOnePublic(req,res);
});

router.post('/image/upload', (req,res) =>{//-/upload
    service.post(req, res);
});

router.delete('/image/deleteProfile/:id_type/:id', (req,res) =>{
    service.deleteOne(req, res);
});

router.delete('/image/deletePublic/:id_group/:id', (req,res) =>{
    service.deletePublic(req, res);
});

module.exports = router;  