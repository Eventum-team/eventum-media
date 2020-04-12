const path = require('path');
const { unlink } = require('fs-extra');

const Image = require('../models/image');

async function getAll(req,res){
    const images = await Image.find();
    console.log(images);
    res.send(images);
    //res.render('index');
};

async function getAllProfile(req, res){
    const image = await Image.find({ profile: true });
    console.log(image);
    res.send(image);
    //res.send('profile images');
};

async function getOneProfile(req, res){
    const { id_type } = req.params;
    const image = await Image.find({ profile: true, id_type });
    console.log(image);
    res.send(image);
    //res.send('profile images'); 
};

async function getAllPublic(req, res){
    const image = await Image.find({ profile: false });
    console.log(image);
    res.send(image);
    //res.send('profile images');
};

async function getOnePublic(req, res){
    const { id_group } = req.params;
    const image = await Image.find({ profile: false, id_group });
    console.log(image);
    res.send(image);
    //res.send('profile images'); 
};

async function post(req, res){
    const image = new Image();
    image.profile = req.body.profile;
    image.id_type = req.body.id_type;
    image.id_group = req.body.id_group;
    image.fieldname = req.file.fieldname;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.filename = req.file.filename;
    image.path = '/public/uploads/' + req.file.filename;
    image.size = req.file.size;
    
    await image.save();
    console.log(image);
    res.send(image);
    //res.redirect('/');
};

async function deleteOne(req, res){
    const { id, id_type } = req.params;
    const image = await Image.findById(id);
    if(image.id_type==id_type && image.profile){
        console.log(image);
        await unlink(path.resolve('.'+ image.path));
        await image.remove();
        console.log('image identyfied by ' + id + ' owned by '+ id_type +' was deleted');
        res.send('image identyfied by ' + id + ' owned by '+ id_type +' was deleted');
        //res.redirect('/');
    } else {
        console.log(image);
        console.log('you can´t delete this image');
        res.send('you can´t delete this image');
    }   
};

async function deletePublic(req, res){
    const { id, id_group } = req.params;
    const image = await Image.findById(id);
    if(image.id_group==id_group && !image.profile){
        console.log(image);
        await unlink(path.resolve('.'+ image.path));
        await image.remove();
        console.log('image identyfied by ' + id + ' owned by '+ id_group +' was deleted');
        res.send('image identyfied by ' + id + ' owned by '+ id_group +' was deleted');
        //res.redirect('/');
    } else {
        console.log(image);
        console.log('you can´t delete this image');
        res.send('you can´t delete this image');
    }   
};

exports.getAll = getAll;
exports.getProfile = getAllProfile;
exports.getAllPublic = getAllPublic;
exports.getOneProfile = getOneProfile;
exports.getOnePublic = getOnePublic;
exports.post = post;
exports.deleteOne = deleteOne;
exports.deletePublic = deletePublic