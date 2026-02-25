import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import path from "path"

let isConfigured = false;

const configureCloudinary = () => {
    if (!isConfigured) {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        })
        isConfigured = true;
    }
}

const uploadOnCloudinary = async (localFilePath) => {
    try {
        configureCloudinary();

        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // console.log("file is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        console.log("Cloudinary upload error:", error);
        fs.unlinkSync(localFilePath)
        return null
    }
}

export { uploadOnCloudinary }
