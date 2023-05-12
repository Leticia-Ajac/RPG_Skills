import { Link } from "react-router-dom"
import styled from "styled-components"

const Button1 = styled(Link)({
    backgroundColor: "#4ACFF0",
    fontWeight:"700",
    fontSize:"22px",
    borderRadius:"25px",
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

const ButtonContinue = styled(Link)({
    fontWeight:"700",
    backgroundColor: '#4ACFF0',
    position: 'fixed',
    top: '90vh',
    left: '90vw',
    fontSize:"18px",
    borderRadius:"25px",
    border:"0px",
    padding:"10px 0px",
    width: "120px",
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

const Button2 = styled(Link)({
    fontWeight:"700",
    display: 'block',
    backgroundColor: '#4ACFF0',
    fontSize:"18px",
    borderRadius:"25px",
    border:"0px",
    padding:"10px 0px",
    margin:"5px 30px 0px",
    width: "150px",
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


const ButtonOptionNotSelected = styled('div')({
    '& button' : {
        backgroundColor: "#2D3757",
        fontWeight:"700",

        fontSize:"18px",
        borderRadius:"25px",
        border:"0px",
        padding:"7px 30px",
        lineHeight: '1.5',
        margin:"5px auto 10px",
        width: "80%",
        height: "15vh",
        color:"#FBFDFD",
        textDecoration:"none",
        textAlign:"center",

        fontSize: '12px',

        textAlign:'center',
        fontWeight:"500",

        WebkitTransition:"all 1s ease-in-out",
        transition:"all 0.3s ease-in-out",
        ":hover":{
            WebkitTransition:"all 1s ease-in-out",
            transition:"all 0.3s ease-in-out"
        }
    },
    '& .selectBtnErrado' : {
        backgroundColor: "#502541",
    },
    '& .selectBtnCerto' : {
        backgroundColor: "#1C7B32",
    },

})

const ButtonOptionContainer = styled('div')({
    '& .buttonNavigate':{
        
    }
})

export {
    Button1,
    Button2,
    ButtonContinue,
    ButtonOptionNotSelected
}