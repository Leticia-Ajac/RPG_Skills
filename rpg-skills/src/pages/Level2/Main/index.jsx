import MainBox from "../../../components/Boxes/MainBox";

export default function Level2Main() {

    return(
        <>
        <MainBox
            name="Gustavo"
            level="2"
            rightOption = "option_2"
            to="/Level3Main"
            selectBtnOne = "Eu mudo suas tarefas e tento conversar com ele para entender sua satisfação com seu cargo atual. Logo será possível compreender se há algo relacionado com desmotivação, mas claro, não falaria nada em relação ao desempenho baixo, não quero fazer nada para magoá-lo em nenhum sentido"
            selectBtnTwo = "Eu prefiro ficar mais quieto, pelo menos por enquanto, não quero arranjar brigas com uma equipe que eu acabei de chegar. Além de muito provavelmente prejudicar minha amizade também irá passar uma imagem negativa para o restante da minha equipe, o que não é o objetivo"
            selectBtnThree = "Eu seria franco com ele, abordaria sobre desempenho baixo e também questões relacionadas a necessidade evidente de separação da vida profissional com o pessoal, explicando o impacto de tal fato no cotidiano da equipe"
            >
                <p>
                Durante suas primeiras semanas de trabalho, você notou que existiam uma série de situações que precisavam ser resolvidas, era uma época de muita mudança e conflito na empresa, visto a grande fusão com sua empresa parceira, o Banco Original. 
                <br/><br/>
                Alguns dias após, uma de suas preocupações surgiu quando você percebeu sua falta de conhecimento referente ao ecossistema de moedas digitais, você já atuava em mercado financeiro, porém trabalhava em uma empresa muito tradicional, que ofertava produtos muito antigos e conhecidos no mercado. Logo, a grande disrrupção causada por este novo mercado te assustou um pouco, por ser um ambiente totalmente novo. </p>
            </MainBox>
        </>
    )
}