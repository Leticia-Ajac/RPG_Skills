import { Describe1, Title1 } from '../../Texts'
import './style.css'
export default function SmallBox(props){
    return(
        <div className="smallbox">
            <div id='img'></div>
            <div className='smallbox_container'>
                <Title1>{props.title}</Title1>
                <Describe1>{props.describe}</Describe1>
            </div>
            {props.children}
        </div>
    )
}
