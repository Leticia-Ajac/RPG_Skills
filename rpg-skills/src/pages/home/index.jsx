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
            describe="Loren impsun ka a hsh adasha dakajs d djjsahdahs dhafshf sadhsdahduas ahahsahsa isabela"
            >
            <Button1 onClick={navegate} to="/Level1Intro" >
                Start
            </Button1>
        </SmallBox>
        </>
    )
}