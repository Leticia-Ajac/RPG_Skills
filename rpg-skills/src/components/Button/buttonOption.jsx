import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import { ButtonOptionNotSelected, ButtonContinue, ButtonOptionIncorrect } from '../Button/index'

export default function BtnOptionNotSelectedCompontent(props){
    const [toSelected, setToSelected] = useState(true)
    const [botao_1, setBotao_1] = useState('selectBtn')
    const [botao_2, setBotao_2] = useState('selectBtn')
    const [botao_3, setBotao_3] = useState('selectBtn')
    const [showContinue, setShowContinue] = useState('none')
    let acertou = props.rightOption


    const ButtonContinueMain = styled(ButtonContinue)({
        display: showContinue,
    })

    function acertar(e) {if (toSelected) {
        console.log(e.target.value)
        e.target.style = 'border: 3px solid #fff'

        if (e.target.id == acertou)  {
            if (e.target.id == 'option_1') {
                setBotao_1('selectBtnCerto')
                setBotao_2('selectBtnErrado')
                setBotao_3('selectBtnErrado')
            } else if (e.target.id == 'option_2') {
                setBotao_2('selectBtnCerto')
                setBotao_1('selectBtnErrado')
                setBotao_3('selectBtnErrado')
            } else if (e.target.id == 'option_3') {
            setBotao_3('selectBtnCerto')
            setBotao_1('selectBtnErrado')
            setBotao_2('selectBtnErrado')
            }
            console.log('Ebaa voce acertou :D')
        } else {
            if (acertou == 'option_1') {
                setBotao_1('selectBtnCerto')
                setBotao_2('selectBtnErrado')
                setBotao_3('selectBtnErrado')
            } else if (acertou == 'option_2') {
                setBotao_2('selectBtnCerto')
                setBotao_1('selectBtnErrado')
                setBotao_3('selectBtnErrado')
            } else if (acertou == 'option_3') {
            setBotao_3('selectBtnCerto')
            setBotao_1('selectBtnErrado')
            setBotao_2('selectBtnErrado')
            } console.log('Você errou, muito triste :(')
        }
        setShowContinue('block')
        setToSelected(false)
    }   
    }


    return(
        <div>
            <ButtonOptionNotSelected>
                <button onClick={acertar} id='option_1' className={botao_1}>
                {props.optionOne}
                </button>
            </ButtonOptionNotSelected>
            <ButtonOptionNotSelected>
                <button onClick={acertar} id='option_2' className={botao_2}>
                                {props.optionTwo}
                </button>
            </ButtonOptionNotSelected>
                <ButtonOptionNotSelected>
                <button onClick={acertar} id='option_3' className={botao_3}>
                                {props.optionThree}
                </button>
            </ButtonOptionNotSelected>
            <ButtonContinueMain to={props.to}>
                Continue
            </ButtonContinueMain>
        </div>
        
        
    )
}