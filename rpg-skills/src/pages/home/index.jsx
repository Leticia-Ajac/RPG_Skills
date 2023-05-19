import React from "react";
import SmallBox from "../../components/Boxes/SmallBox";
import { Button1 } from "../../components/Button/index.jsx";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navegate = useNavigate()

    return(
        <>
            <SmallBox 
            title='🐱 Skills Game 🐱'
            describe="Este é Gustavo Scarpacat, ajude ele nessa jornada como PM"
            >
            <Button1 onClick={() => {
                    navegate()
                    localStorage.setItem('rightOptions',0)
                }} to="/Level1Main" >
                Start
            </Button1>
        </SmallBox>
        </>
    )
}