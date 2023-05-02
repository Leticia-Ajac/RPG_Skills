import { Link } from "react-router-dom"
import styled from "styled-components"

export const Button1 = styled(Link)({
    backgroundColor: "#4ACFF0",
    fontWeight:"700",
    fontSize:"22px",
    borderRadius:"15px",
    border:"0px",
    padding:"20px 0px",
    width: "75%",
    color:"#FBFDFD",
    textDecoration:"none",
    WebkitTransition:"all 1s ease-in-out",
    transition:"all 0.3s ease-in-out",
    ":hover":{
        backgroundColor:"#2E82A7",
        WebkitTransition:"all 1s ease-in-out",
        transition:"all 0.3s ease-in-out"
    }
})