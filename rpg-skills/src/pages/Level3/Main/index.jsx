import MainBox from "../../../components/Boxes/MainBox";
import fallCat from '../gato_caindo.jpg'
import lvImageThree from '../nivel_3.png'

export default function Level3Main() {

    return(
        <>
        <MainBox
            name="Gustavo"
            level="3"
            image= {fallCat}
            lvimage={lvImageThree}
            rightOption = "option_2"
            to="/Level4Main"
            selectBtnOne = "Como ele demonstra ser o stakeholder mais próximo e também o que possui mais conhecimento sobre o assunto, você segue líder de Growth, buscando produzir um resultado acima do esperado "
            selectBtnTwo = "Por conta de outros backlogs que já estavam mapeados e priorizados, eu decido não seguir com o plano do líder de Growth, mesmo que ele seja um dos stakeholders com maior interação com o projeto."
            selectBtnThree = "Você vai pela sua opinião, como o produto é seu, acredita que se basear em outras opiniões só acabará te deixando mais confuso. Como PM é seu dever decidir o caminho que produto seguirá no futuro, inclusive como o backlog será feito"
            >
                <p>
                Neste momento, A BU de Crypto está trabalhando no lançamento de uma nova feature: a central de alerta de preços. Porém logo toda a sua animação vai por água abaixo, pois você se depara com um grande desafio pela frente. Ao alinhar com seu GPM sobre o projeto, ele relatou que a parte mais importante era o alerta por meio de notificação. Porém, em contato com o líder Growth como seu principal ponto de apoio, possui uma opinião diferente. Para ele, somente um push de aviso ficaria uma “experiência quebrada”, o melhor a se fazer seria fazer um hub inteiro de notícias, para que o user pudesse explorar e entender os acontecimentos do mercado financeiro. Algo que agregaria valor não somente para Crypto, mas também para a área de investimentos. Visto este cenário, você decide: 
                </p>
            </MainBox>
        </>
    )
}