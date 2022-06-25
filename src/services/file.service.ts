// import storage from "../config/s3Config";
// import fs from 'fs';

// class FileService {

//   public async uploadFileToS3(fileData: Express.Multer.File){
//     try {
//       const fileContent: Buffer = fs.readFileSync(fileData.path);
//       const params: {
//         Bucket: string;
//         Key: string;
//         Body: Buffer;
//       } = {
//           Bucket: "cat/",
//           Key: fileData.originalname,
//           Body: fileContent
//       };
//       const result = await storage.upload(params).promise();
  
//       return;
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }

// export default FileService;