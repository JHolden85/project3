const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');

mongoose.connect("/");

let profileSchema = new Schema(
    {image: {
        data: Buffer,
        constentType: String
    }
}
);

const ProfilePhoto = mongoose.model('ProfilePhoto', profileSchema)
module.exports = ProfilePhoto;