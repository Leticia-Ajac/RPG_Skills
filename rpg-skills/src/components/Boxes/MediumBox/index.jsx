import './style.css'

export default function MediumBox(props){
    return(
        <div className="mediumbox">
            {props.children}
        </div>
    )
}