const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');

// mongoose.connect(‘url_here’);

var photoSchema = new Schema({ 
    img: { 
       data: Buffer, 
       contentType: String 
    }
 }
);



const Photos = mongoose.model('Photos',photoSchema);

module.exports = Photos;