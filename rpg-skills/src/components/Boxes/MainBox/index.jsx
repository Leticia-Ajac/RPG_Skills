import { useNavigate } from "react-router-dom"
import { Button2 } from "../../Button"
import BtnOptionNotSelectedCompontent from "../../Button/buttonOption"
import { Describe2, Title2 } from "../../Texts"
import status_1 from './status_1.png'
import status_2 from './status_2.png'
import status_3 from './status_3.png'
import status_4 from './status_4.png'
import status_5 from './status_5.png'

import "./style.css"
export default function MainBox(props){
    const navegate = useNavigate()
    const pontos = localStorage.getItem('rightOptions')
    const status = [status_1,status_2,status_3,status_4,status_5]

    return(
        <div className='mainbox'>
            <section id='b1'>
                <Title2 id="element">{props.name} - Lv.{parseInt(pontos)+1}</Title2>
                
                <img className="lvImage" src={status[pontos]}/>
                <img className="catImage" src={props.image}/>
            </section>
            <section id='b2'>
                <Title2 id="element" >Situação {props.level}</Title2>
                <Describe2 id="element" >
                    {props.children}
                </Describe2>
                <BtnOptionNotSelectedCompontent 
                    onClick={navegate} 
                    rightOption={props.rightOption}
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