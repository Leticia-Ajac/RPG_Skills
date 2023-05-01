import './style.css'
function SmallBox(props){
    return(
        <div className="smallbox">
            <div id='img'></div>
            <div className='smallbox_container'>
                <h1>{props.title}</h1>
                <p>{props.describe}</p>
            </div>
            {props.children}
        </div>
    )
}

function MediumBox(props){
    return(
        <div className="mediumbox">
            {props.children}
        </div>
    )
}

function BigBox(props){
    return(
        <div className='bigbox'>
            <section id='b1'>
                
            </section>
            <section id='b2'>

            </section>
        </div>
    )
}

export {
    SmallBox,
    MediumBox,
    BigBox
}