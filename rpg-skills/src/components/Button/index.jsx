import { Link } from "react-router-dom"
import styled from "styled-components"

const Button1 = styled(Link)({
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

const Button2 = styled(Link)({
    backgroundColor: "#4ACFF0",
    fontWeight:"700",
    fontSize:"18px",
    borderRadius:"25px",
    border:"0px",
    padding:"10px 0px",
    margin:"0px 30px",
    width: "25%",
    color:"#FBFDFD",
    textDecoration:"none",
    textAlign:"center",
    WebkitTransition:"all 1s ease-in-out",
    transition:"all 0.3s ease-in-out",
    ":hover":{
        backgroundColor:"#2E82A7",
        WebkitTransition:"all 1s ease-in-out",
        transition:"all 0.3s ease-in-out"
    }
})

export {
    Button1,
    Button2
}