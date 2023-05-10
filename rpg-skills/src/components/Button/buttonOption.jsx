import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ButtonOptionNotSelected, ButtonOptionCorrect, ButtonOptionIncorrect } from '../Button/index'

export default function BtnOptionNotSelectedCompontent(props){
    const [botao, setBotao] = useState('selectBtn')
    const acertou = props.acertou

    function acertar(acertou) {
        if (acertou == 'sim') {
            setBotao('selectBtnCerto');
        } else if (acertou == 'nao') {
            setBotao('selectBtnErrado')
        }
    }


    return(
        <ButtonOptionNotSelected onclick={acertar(acertou)} className={botao}>
            <div>
                {props.text}
            </div>
            <div>
                {props.emoji}
            </div>
        </ButtonOptionNotSelected>
    )
}