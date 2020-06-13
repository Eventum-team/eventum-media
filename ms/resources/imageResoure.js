const { Router } = require('express');
const router = Router();


//const Image = require('../models/image');
const service = require('../services/imageService');

/*router.get('/', (req,res) =>{
    res.render('index');
});*/

/*router.post('/upload1', (req,res) =>{
    res.send('uploaded');
    console.log('uploaded');
});*/

router.get('/image', (req,res) =>{
    service.getAll(req,res);
});

router.get('/image/profile', (req,res) =>{
    service.getAllProfile(req,res);
});

router.get('/image/profile/:id_type', (req,res) =>{
    service.getOneProfileUser(req,res);
});

/*router.get('/image/group', (req,res) =>{
    service.getAllGroup(req,res);
});*/

router.get('/image/group/:id_group', (req,res) =>{
    service.getAllGroup(req,res);
});

router.get('/image/group/profile/:id_group', (req,res) =>{
    service.getOneProfileGroup(req,res);
});

router.get('/image/profile/:id_type/event/:id_event', (req,res) =>{
    service.getAllEvent(req,res);
});//user

router.get('/image/profile/:id_type/event/profile/:id_event', (req,res) =>{
    service.getOneProfileEvent(req,res);
});//user

router.get('/image/group/:id_group/event/:id_event', (req,res) =>{
    service.getAllGroupEvent(req,res);
});

router.get('/image/group/:id_group/event/profile/:id_event', (req,res) =>{
    service.getOneProfileEvent(req,res);
});

router.post('/image/upload', (req,res) =>{//-/upload
    service.createImage(req, res);
});

router.delete('/image/profile/delete/:id_type/:id', (req,res) =>{
    service.deleteProfile(req, res);
});

router.delete('/image/group/delete/:id_group/:id', (req,res) =>{
    service.deleteGroup(req, res);
});

router.delete('/image/group/delete/profile/:id_group/:id', (req,res) =>{
    service.deleteProfileGroup(req, res);
});

router.delete('/image/profile/:id_type/event/delete/:id_event/:id', (req,res) =>{
    service.deleteEvent(req, res);
});//user

router.delete('/image/profile/:id_type/event/delete/profile/:id_event/:id', (req,res) =>{
    service.deleteProfileEvent(req, res);
});//user

router.delete('/image/group/:id_group/event/delete/:id_event/:id', (req,res) =>{
    service.deleteGroupEvent(req, res);
});

router.delete('/image/group/:id_group/event/delete/profile/:id_event/:id', (req,res) =>{
    service.deleteGroupProfileEvent(req, res);
});

module.exports = router;  