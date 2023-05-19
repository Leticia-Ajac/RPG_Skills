import { Describe1, Title1 } from '../../Texts'
import cat from './gato.png'

import './style.css'
export default function SmallBox(props){
    return(
        <div className="smallbox">
            <img src={cat} className='catimg'/>
            <div className='smallbox_container'>
                <Title1>{props.title}</Title1>
                <Describe1>{props.describe}</Describe1>
            </div>
            {props.children}
        </div>
    )
}
