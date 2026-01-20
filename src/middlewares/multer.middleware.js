import multer from "multer";
import path from "path"; 
import { fileURLToPath } from "url"; 
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go UP from src/middlewares to root, then into public/temp
const tempDir = path.join(__dirname, "../../public/temp"); 
// Create temp directory if it doesn't exist
  
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
   // console.log("Multer filename:", filename);
    cb(null, filename)
  }
})

export const upload = multer({ 
    storage: storage
})