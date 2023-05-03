import { useNavigate } from "react-router-dom"
import { Button2 } from "../../Button"
import { Describe2, Title2 } from "../../Texts"
import "./style.css"
export default function MainBox(props){
    const navegate = useNavigate()
    return(
        <div className='mainbox'>
            <section id='b1'>
                <Title2 id="element">{props.name}</Title2>
                componente skills
            </section>
            <section id='b2'>
                <Title2 id="element" >Level {props.level}</Title2>
                <Describe2 id="element" >Ao chegar lá, você se depara com várias pessoas diferentes, porém você também possui diversas coisas que precisa resolver durante esta nova jornada, o que você faz primeiro? </Describe2>
                <Button2 onClick={navegate} to={props.to} id="button" >Continue</Button2>
            </section>
        </div>
    )
}