import MainBox from "../../../components/Boxes/MainBox";
import firstDay from '../first_day.jpg'
import lvImageOne from '../nivel_1.png'

export default function Level1Main() {
    
    return(
        <>
        <MainBox
            name="Gustavo"
            level="1"
            image= {firstDay}
            lvimage={lvImageOne}
            rightOption = "option_3"
            to="/Level2Main"
            selectBtnOne = "Como eu ainda não tenho muito conhecimento de como funciona a empresa e se este comportamento é algo normal aqui. Decido primeiro entender melhor o que aconteceu através de relatos de outras pessoas envolvidas no time dele sobre o caso. "
            selectBtnTwo = "Por enquanto, prefiro continuar quieto. Utilizar do famoso “fingir que não vi” somente para observar mais o comportamento dele nas próximas decisões, mesmo que seja uma situação crítica por agora, estou disposta a ver até onde a situação vai para entregá-lo ao meu superior no momento certo. "
            selectBtnThree = "Eu seria franco com ele, abordaria sobre a decisão que ele tomou relacionado ao produto sem minha aprovação, ressaltando que este tipo de decisão não era de sua competência. Além disso, também explicaria todas as consequências que aquela ação causou em diversas etapas da jornada do usuário"
            >
                <p>Em uma manhã de segunda feira, lá estava você estava subindo as escadas do edifício de São Paulo da fintech mais conhecida do país, o PicPay. Contratado recentemente. Era seu primeiro dia de trabalho como novo PM da BU de Crypto.  
                <br/><br/>
                Ao chegar lá, você descobriu que o seu TM era um antigo melhor amigo de infância que você não encontrava há séculos! Mas logo na primeira semana, um grande problema aconteceu. Você descobriu que ele acabou ultrapassando dos limites e decidiu tomar decisões estratégicas relacionadas ao produto sozinho, com o intuito de melhorar a agilidade de seus dev’s. A grande questão é muito amiga dele, porém esta atitude acabou gerando graves consequências negativas no produto </p>
            </MainBox>
        </>
    )
}