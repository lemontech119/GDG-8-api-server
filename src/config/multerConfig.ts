// import { Request } from "express";
// import multer, { FileFilterCallback } from "multer";

// type FileNameCallback = (error: Error | null, filename: string) => void

// export const multerConfig = {
//     storage: multer.diskStorage({
//         destination: 'uploads/',
//         filename: function (req: Request, file: Express.Multer.File, cb: FileNameCallback) {
//             console.log(file);
//             cb(null, file.originalname);
//         }
//     })
// }