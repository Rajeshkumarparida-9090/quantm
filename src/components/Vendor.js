import { Box, Typography } from "@mui/material";
import React from "react";

const Vendor = ({ vendordata }) => {
  // const data= [{name:"Dell technology",id:"#VEN2013197",email:"Troy_Lehner98@gmail.com",phone:"+71 931-465-6838"}]
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ color: "#667085", fontSize: "10px" }}>
          Street
        </Typography>
        <Typography sx={{ fontSize: "10px" }}>{vendordata.name}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ color: "#667085", fontSize: "10px" }}>ID</Typography>
        <Typography sx={{ fontSize: "10px" }}>{vendordata.id}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ color: "#667085", fontSize: "10px" }}>
          Email
        </Typography>
        <Typography sx={{ fontSize: "10px" }}>{vendordata.email}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ color: "#667085", fontSize: "10px" }}>
          Phone
        </Typography>
        <Typography sx={{ fontSize: "10px" }}>{vendordata.phone}</Typography>
      </Box>

      {/* Rajesh */}
    </>
  );
};
export default Vendor;
