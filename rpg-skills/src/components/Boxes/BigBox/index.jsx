import { useNavigate } from "react-router-dom"
import { Button2 } from "../../Button"
import { Describe2, Title2 } from "../../Texts"
import "./style.css"
export default function BigBox(props){
    const navegate = useNavigate()
    return(
        <div className='bigbox'>
            <Title2 id="title">{props.title}</Title2>
            <Describe2>{props.children}</Describe2>
            <Button2 onClick={navegate} to={props.to} id="button" >{props.btn}</Button2>
        </div>
    )
}