import { useNavigate } from "react-router-dom"
import { Button2 } from "../../Button"
import { Describe2, Title2 } from "../../Texts"
import "./style.css"
export default function BigBox(props){
    const navegate = useNavigate()
    return(
        <div className='bigbox'>
            <Title2 id="title">{props.level}</Title2>
            <Describe2>Lorem ipsum dolor sit amet. Est praesentium provident et praesentium deserunt aut velit facere id necessitatibus cupiditate ut quos dolores qui molestias dolore. Aut minima quia est molestiae tempore est corrupti aliquam. Sit inventore consequatur nam itaque repudiandae eum dolorem labore non nihil ipsam cum dolores rerum et nesciunt molestiae cum minima voluptatibus?</Describe2>
            <Button2 onClick={navegate} to={props.to} id="button" >Continue</Button2>
        </div>
    )
}