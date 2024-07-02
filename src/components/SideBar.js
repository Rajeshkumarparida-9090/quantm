import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";
import checkSquery from "../image/check-square.png";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import Demo from "./Demo";
import PurchageOrder from "./PurchaseOrder";



const SideBar = ()=>{
    return(
        <>
             <div style={{ display: "flex",minHeight:"91vh"}}>
      <Sidebar className="app">
        <Menu>

          <SubMenu label="Accounting" className="label" icon={<img src={checkSquery} />}>
            <MenuItem 
            component={<Link to="purchase-order" className="purchase-order" />}
            icon={<TimelineRoundedIcon />}
            style={{color:"#000"}}
            > 
            Purchase Order 
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
            <Route path="/" element={<Demo />} />
            <Route path="/purchase-order" element={<PurchageOrder />} />
        </Routes>
      </section>
    </div>
        </>
    )
}
export default SideBar;