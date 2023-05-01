import './style.css'
function Button1(props){
    return(
        <button className='button1'>
            {props.cta}
        </button>
    )
}

export {
    Button1
}