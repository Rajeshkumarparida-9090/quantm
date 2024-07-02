import { Box, Typography } from "@mui/material";
import React from "react";
const Card = ({heading, children})=>{
    return(
        <>
            <Box sx={{padding:"10px"}} className="card">
                <Typography variant="h5" sx={{margin:"10px 0", fontSize:"14px"}}>
                    {heading}
                </Typography>
                <Box>
                {children}
                </Box>
            </Box>
        </>
    )
}
export default Card;