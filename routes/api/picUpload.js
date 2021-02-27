const router = require('express').Router();
const db = require('../../models/PostPics');
const multer = require('multer');
const express = require('express');

//Upload multer POST API
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../../uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null,true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        filesize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.route("/picUpload")
    .post(upload).single('imgData'), (req, res, next) => {
        console.log(req.body);
        const newPic = new db({
            imgName: req.body.imageName,
            imgData: req.file.path
        });

        newPic.save()
            .then((result) => {
                console.log(result);
                res.status(200).json({
                    success: true,
                    document: result
                });
            })
            .catch((err) => next(err));
    };