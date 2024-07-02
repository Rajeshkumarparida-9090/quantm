import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomSeparator from "../reuseComponents/Breadcrumb";
import Card from "../reuseComponents/Card";
import AllowPdffile from "../reuseComponents/AllowPdffile";
import draft from "../image/draft.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import avtar from "../image/Avatar.png";
import Vendor from "./Vendor";
const PurchageOrder = () => {
  const [name, setName] = useState("PO-20311");
  const [date, setDate] = useState("16/09/2023");
  const [dDate, setDDate] = useState("24/10/2023");
  const [status, setStatus] = useState("Draft");
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const breadcrumb = ["Accounting", "purchase Order", "Edit", "PO-20311"];
  const tabs = ["Vendor", "PR", "Qualification", "History"];
  const vendordata= {name:"Dell technology",id:"#VEN2013197",email:"Troy_Lehner98@gmail.com",phone:"+71 931-465-6838"}

  const breadcrumbs = breadcrumb.map((e, i) => (
    <Typography key="3" color="text.primary">
      {e}
    </Typography>
  ));

  console.log("value=====", value);
  const data = {
    name: "Dell technology",
    id: "#VEN2013197",
    email: "Troy_Lehner98@gmail.com",
    phone: "+71 931-465-6838",
  };
  return (
    <div
      style={{
        width: "calc(100vw - 250px)",
        height: "100%",
        background: "#F7F8FD",
      }}
    >
      <Box sx={{
        padding:"10px"
      }}>
        <CustomSeparator breadcrumbs={breadcrumbs} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box>
            <Card heading="General information">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <Typography variant="p" sx={{fontSize:"10px"}}>Purchase Order number</Typography>
                    <Box>
                      <TextField
                        id="outlined-controlled"
                        sx={{ width: "100%" }}
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{fontSize:"10px"}}>Delivery date</Typography>
                    <Box>
                      <TextField
                        id="outlined-controlled"
                        sx={{ width: "100%" }}
                        value={dDate}
                        onChange={(event) => {
                          setDDate(event.target.value);
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography variant="p" sx={{fontSize:"10px"}}>Purchase order date</Typography>
                    <Box>
                      <TextField
                        id="outlined-controlled"
                        sx={{ width: "100%" }}
                        value={date}
                        onChange={(event) => {
                          setDate(event.target.value);
                        }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{fontSize:"10px"}}>Status</Typography>
                    <Box>
                      <TextField
                        id="outlined-controlled"
                        sx={{ width: "100%" }}
                        value={status}
                        onChange={(event) => {
                          setStatus(event.target.value);
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
          <Box>
            <Card heading="PO details">
              <Box
                sx={{
                  background: "#E6E9FF",
                  width: "100%",
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AllowPdffile />
              </Box>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              margin: "10px",
              gridGap: "10px",
            }}
          >
            <Button variant="text" startIcon={<img src={draft} alt="draft" />}>
              Save as draft
            </Button>
            <Button variant="contained">Save and continue</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Card heading="Other details">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Vendor" value="1" />
                    <Tab label="PR" value="2" />
                    <Tab label="Qualification" value="3" />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <>
                    <Box sx={{ marginBottom: "30px" }}>
                      <Typography variant="p" >
                        Vendor Contact information :
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <Typography sx={{ color: "#667085", fontSize: "10px" }}>
                        name
                      </Typography>

                      <Chip
                        avatar={<Avatar alt="Natacha" src={avtar} />}
                        label={data.name}
                        color="primary"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <Typography sx={{ color: "#667085", fontSize: "10px" }}>
                        ID
                      </Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        {data.id}
                      </Typography>
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
                      <Typography sx={{ fontSize: "10px" }}>
                        {data.email}
                      </Typography>
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
                      <Typography sx={{ fontSize: "10px" }}>
                        {data.phone}
                      </Typography>
                    </Box>
                  </>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      marginBottom: 2,
                    }}
                  ></Box>
                  <>
                    <Box sx={{ marginBottom: "30px" }}>
                      <Typography variant="p" >Billing details :</Typography>
                    </Box>
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
                      <Typography sx={{ fontSize: "10px" }}>
                        10934 Botsford Lakes, Lillianafield 13198-0174
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <Typography sx={{ color: "#667085", fontSize: "10px" }}>
                        Country
                      </Typography>
                      <Typography sx={{ fontSize: "10px" }}>Mexico</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <Typography sx={{ color: "#667085", fontSize: "10px" }}>
                        State
                      </Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        Botsford Lakes
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        fontSize: "10px",
                      }}
                    >
                      <Typography sx={{ color: "#667085", fontSize: "10px" }}>
                        City
                      </Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        Lillianafield
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        fontSize: "10px",
                      }}
                    >
                      <Typography sx={{ color: "#667085", fontSize: "10px" }}>
                        ZIP/PIN code
                      </Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        13198-0174
                      </Typography>
                    </Box>
                  </>
                </TabPanel>
                <TabPanel value="2">
                    <Vendor vendordata={vendordata} />
                </TabPanel>
                <TabPanel value="3">
                    <Vendor vendordata={vendordata} />
                </TabPanel>
              </TabContext>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default PurchageOrder;
