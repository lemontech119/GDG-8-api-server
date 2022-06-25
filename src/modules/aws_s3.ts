import { getRepository } from "typeorm";
import { TestEntity } from "@entity/test.entity";
import { CreateTestDto } from "@dtos/index.dto"
import { Test } from "@interfaces/tests.interface"; 

import AWS from 'aws-sdk';
import fs from "fs";


AWS.config.update({
    region: '',
    accessKeyId: '',
    secretAccessKey: '',
});

const s3 = new AWS.S3();
// const fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'gdgcat',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req: any, file: any, cb: any) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
});

module.exports = upload;

/*
const uploadFile = (fileName: string) => {
    const fileContent = fs.readFileSync(fileName);
    const params = {
      Bucket: 'gdgcat',
      Key: 'text.txt',
      Body: fileContent
    };
    s3.upload(params, function(err: any, data: any) {
      if (err)
        throw err;
      console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('./uploads/test.txt');
*/

