import { useNavigate } from "react-router-dom"
import { Button2 } from "../../Button"
import BtnOptionNotSelectedCompontent from "../../Button/buttonOption"
import { Describe2, Title2 } from "../../Texts"
import "./style.css"
export default function MainBox(props){
    const navegate = useNavigate()
    return(
        <div className='mainbox'>
            <section id='b1'>
                <Title2 id="element">{props.name}</Title2>
            </section>
            <section id='b2'>
                <Title2 id="element" >Level {props.level}</Title2>
                <Describe2 id="element" >
                    {props.children}
                </Describe2>
                <BtnOptionNotSelectedCompontent 
                    onClick={navegate} 
                    rightOption='option_2'
                    optionOne = {props.selectBtnOne}
                    optionTwo = {props.selectBtnTwo}
                    optionThree = {props.selectBtnThree}
                    id="button"
                    to={props.to}
                    >
                        Continue</BtnOptionNotSelectedCompontent>
            </section>
        </div>
    )
}