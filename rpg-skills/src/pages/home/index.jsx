import React from "react";
import SmallBox from "../../components/Boxes/SmallBox";
import { Button1 } from "../../components/Button/index.jsx";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navegate = useNavigate()
    return(
        <>
            <SmallBox 
            src="../../assets/fausto.png" 
            title='Skills'
            describe="Este é Gustavo Scarpacat, ajude ele nessa jornada"
            >
            <Button1 onClick={navegate} to="/Level1Main " >
                Start
            </Button1>
        </SmallBox>
        </>
    )
}