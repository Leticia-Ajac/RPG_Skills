import MainBox from "../../../components/Boxes/MainBox";

export default function Level3Main() {

    return(
        <>
        <MainBox
            name="Gustavo"
            level="3"
            rightOption = "option_3"
            to="/Level4Main"
            selectBtnOne = "Eu mudo suas tarefas e tento conversar com ele para entender sua satisfação com seu cargo atual. Logo será possível compreender se há algo relacionado com desmotivação, mas claro, não falaria nada em relação ao desempenho baixo, não quero fazer nada para magoá-lo em nenhum sentido"
            selectBtnTwo = "Eu prefiro ficar mais quieto, pelo menos por enquanto, não quero arranjar brigas com uma equipe que eu acabei de chegar. Além de muito provavelmente prejudicar minha amizade também irá passar uma imagem negativa para o restante da minha equipe, o que não é o objetivo"
            selectBtnThree = "Eu seria franco com ele, abordaria sobre desempenho baixo e também questões relacionadas a necessidade evidente de separação da vida profissional com o pessoal, explicando o impacto de tal fato no cotidiano da equipe"
            >
                <p>
                Além disso, existia outro impedimento para o trabalho. No começo era tudo ótimo e você estava totalmente animado com esta oportunidade, ainda mais ao saber que seu antigo amigo está trabalhando na sua equipe e estaria sob sua gestão por um tempo, com intuito de adquirir mais experiências entre as áreas. 
                <br/><br/>
                Porém, quando o período de trabalho começou, você percebeu que seu conhecido estava se aproveitando da sua amizade como uma garantia para não fazer o trabalho de forma correta. Você, não sabendo muito o que dizer ou como abordá-lo, acabava “empurrando a situação”, porém só piorava ao decorrer do tempo. </p>
            </MainBox>
        </>
    )
}