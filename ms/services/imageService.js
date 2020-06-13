const path = require('path');
const { unlink } = require('fs-extra');

const Image = require('../models/image');

async function getAll(req,res){
    const images = await Image.find();
    console.log(images);
    res.send(images);
};

async function getAllProfile(req, res){
    const image = await Image.find({ profile: true });
    console.log(image);
    res.send(image);
};

async function getOneProfileUser(req, res){
    const { id_type } = req.params;
    const image = await Image.find({ profile: true, id_type });
    console.log(image);
    res.send(image);
};

async function getAllGroup(req, res){
    const { id_group } = req.params;
    const image = await Image.find({ id_group });
    console.log(image);
    res.send(image);
    //res.send('profile images'); 
};

async function getOneProfileGroup(req, res){
    const { id_group } = req.params;
    const image = await Image.find({ profile: true, id_group });
    console.log(image);
    res.send(image);
    //res.send('profile images'); 
};

async function getAllEvent(req, res){
    const { id_type, id_event } = req.params;
    const image = await Image.find({ profile: false, id_type, id_event });
    console.log(image);
    res.send(image);
    //res.send('profile images'); 
};//user

async function getOneProfileEvent(req, res){
    const { id_event } = req.params;
    const image = await Image.find({ profile: true, id_event });
    console.log(image);
    res.send(image);
    //res.send('profile images'); 
};

async function getAllGroupEvent(req, res){
    const { id_group, id_event } = req.params;
    const image = await Image.find({ profile: false, id_group, id_event });
    console.log(image);
    res.send(image);
    //res.send('profile images'); 
};

async function createImage(req, res){
    console.log(req.body);
    const image = new Image();
    image.profile = req.body.profile;
    image.id_type = req.body.id_type;
    image.id_group = req.body.id_group;
    image.id_event = req.body.id_event;
    //image.fieldname = req.file.fieldname;
    //image.originalname = req.file.originalname;
    //image.mimetype = req.file.mimetype;
    //image.filename = req.file.filename;
    image.path = req.body.path;
    //image.path = '/public/uploads/' + req.file.filename;
    //image.size = req.file.size;
    
    await image.save();
    console.log(image);
    res.send(image);
    //res.redirect('/');
};

async function deleteProfile(req, res){//luego de esto debe colocar imagen default
    const { id, id_type } = req.params;
    const image = await Image.findById(id);
    if(image.id_type==id_type && image.profile){
        console.log(image);
        //await unlink(path.resolve('.'+ image.path));
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

async function deleteGroup(req, res){
    const { id, id_group } = req.params;
    const image = await Image.findById(id);
    if(image.id_group==id_group && !image.profile){
        console.log(image);
        //await unlink(path.resolve('.'+ image.path));
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

async function deleteProfileGroup(req, res){
    const { id, id_group } = req.params;
    const image = await Image.findById(id);
    if(image.id_group==id_group && image.profile){
        console.log(image);
        //await unlink(path.resolve('.'+ image.path));
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

async function deleteEvent(req, res){
    const { id, id_type, id_event } = req.params;
    const image = await Image.findById(id);
    if(image.id_type==id_type && image.id_event==id_event && !image.profile){
        console.log(image);
        //await unlink(path.resolve('.'+ image.path));
        await image.remove();
        console.log('image identyfied by ' + id + ' owned by '+ id_type +' was deleted');
        res.send('image identyfied by ' + id + ' owned by '+ id_type +' was deleted');
        //res.redirect('/');
    } else {
        console.log(image);
        console.log('you can´t delete this image');
        res.send('you can´t delete this image');
    }   
};//user

async function deleteProfileEvent(req, res){
    const { id, id_type, id_event } = req.params;
    const image = await Image.findById(id);
    if(image.id_type==id_type && image.id_event==id_event && image.profile){
        console.log(image);
        //await unlink(path.resolve('.'+ image.path));
        await image.remove();
        console.log('image identyfied by ' + id + ' owned by '+ id_type +' was deleted');
        res.send('image identyfied by ' + id + ' owned by '+ id_type +' was deleted');
        //res.redirect('/');
    } else {
        console.log(image);
        console.log('you can´t delete this image');
        res.send('you can´t delete this image');
    }   
};//user

async function deleteGroupEvent(req, res){
    const { id, id_group, id_event } = req.params;
    const image = await Image.findById(id);
    if(image.id_group==id_group && image.id_event==id_event && !image.profile){
        console.log(image);
        //await unlink(path.resolve('.'+ image.path));
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

async function deleteGroupProfileEvent(req, res){
    const { id, id_group, id_event } = req.params;
    const image = await Image.findById(id);
    if(image.id_group==id_group && image.id_event==id_event && image.profile){
        console.log(image);
        //await unlink(path.resolve('.'+ image.path));
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
exports.getAllProfile = getAllProfile;
exports.getOneProfileUser = getOneProfileUser;
exports.getAllGroup = getAllGroup;
exports.getOneProfileGroup = getOneProfileGroup;
exports.getAllEvent = getAllEvent;
exports.getOneProfileEvent = getOneProfileEvent;
exports.getAllGroupEvent = getAllGroupEvent;
exports.getAllGroup = getAllGroup;
exports.createImage = createImage;
exports.deleteProfile = deleteProfile;
exports.deleteGroup = deleteGroup;
exports.deleteProfileGroup = deleteProfileGroup;
exports.deleteEvent = deleteEvent;
exports.deleteProfileEvent = deleteProfileEvent;
exports.deleteGroupEvent = deleteGroupEvent;
exports.deleteGroupProfileEvent = deleteGroupProfileEvent;