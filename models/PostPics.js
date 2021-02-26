const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');

mongoose.connect(‘url_here’);

var Item = new ItemSchema({ 
    img: { 
       data: Buffer, 
       contentType: String 
    }
 }
);
var Item = mongoose.model('Clothes',ItemSchema);