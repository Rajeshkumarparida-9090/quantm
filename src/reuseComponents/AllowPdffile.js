import { Box } from "@mui/material";
import React, { useState } from "react";
import upload from "../image/upload-cloud.png";

const AllowPdffile = ()=>{
    const [fileName, setFileName] = useState("")
    const fileChage = (e)=>{
        const filename = e.target;
        const file = filename.files[0];
        console.log("filename=========", file.name)
        setFileName(file.name)
    }
    
    return(
        <Box sx={{
            width:"200px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            background:"#fff"
        }}>
               <div className="">
                    <div className="parent">
                        <div className="file-upload">
                        <img src={upload} alt="upload" />
                        {fileName === ""? <h3>Click to upload or drag and drop</h3>:<h3>{fileName}</h3>}
                        <p>PDF (max. 10 mb)</p>
                        <input type="file" onChange={fileChage} />
                        </div>
                    </div>
                </div>

        </Box>
    )
}
export default AllowPdffile;