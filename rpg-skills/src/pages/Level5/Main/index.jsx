import MainBox from "../../../components/Boxes/MainBox";
import devCat from '../gato_programa.png'
import lvImageFive from '../nivel_5.png'


export default function Level5Main() {

    return(
        <>
        <MainBox
            name="Gustavo"
            level="5"
            image= {devCat}
            lvimage={lvImageFive}
            rightOption = "option_3"
            to="/Conclusion"
            selectBtnOne = "Eu peço para um dos desenvolvedores da minha equipe começar a aprender programação em Java pra ontem! Onde já se viu um profissional que não mude constantemente de área para novos desafios? Com certeza é algo de 20 minutos "
            selectBtnTwo = "Eu simplesmente tento mudar ao máximo possível nosso backlog, para torná-lo acessível aos nossos recursos a que temos hoje."
            selectBtnThree = "Eu percebo que a área de Investimentos está precisando de um Product Designer e por outro lado, possui excessos de DEV para Java. Então faço uma proposta para pedir emprestado mais um desenvolvedor e esvaziar meu backlog"
            >
                Por último, mas não mesmo importante, no backlog da squad estava previsto o desenvolvimento de uma nova feature. Em conversa com o time de dev, houve a necessidade de se obter um especialista em Java, uma vez que eles não tinham mais ninguém que poderia exercer essa função, pois o último integrante especializado em Java tinha acabado de sair. Também é uma tarefa de extrema prioridade em sua equipe 
            </MainBox>
        </>
    )
}