import MainBox from "../../../components/Boxes/MainBox";
import businessCat from '../gatinho_negocios.png'
import lvImageTwo from '../nivel_2.png'

export default function Level2Main() {

    return(
        <>
        <MainBox
            name="Gustavo"
            level="2"
            image= {businessCat}
            lvimage={lvImageTwo}
            rightOption = "option_2"
            to="/Level3Main"
            selectBtnOne = "Se apresenta para sua equipe, é sincero sobre a situação inicial de desconhecimento, mas se mostra disposto a tentar fazer de tudo para agregar valor à empresa, confortando assim os seus funcionários "
            selectBtnTwo = "Eu busco de todas as formas possíveis adquirir todo o conhecimento necessário para atuar da melhor maneira possível em minha área. Assim terei mais clareza ao montar o escopo do projeto e direcionar as tarefas entre a equipe "
            selectBtnThree = "Eu finjo estar totalmente a par do assunto, pois minha equipe precisa visualizar eu como um líder experiente que possui mais conhecimento do que os demais e, portanto, admitir ingenuidade só faria com que meus liderados não me enxergassem como uma referência."
            >
                <p>
                Durante suas primeiras semanas de trabalho, você notou que existiam uma série de situações que precisavam ser resolvidas, era uma época de muita mudança e conflito na empresa, visto a grande fusão com sua empresa parceira, o Banco Original. 
                <br/><br/>
                Alguns dias após, uma de suas preocupações surgiu quando você percebeu sua falta de conhecimento referente ao ecossistema de moedas digitais, você já atuava em mercado financeiro, porém trabalhava em uma empresa muito tradicional, que ofertava produtos muito antigos e conhecidos no mercado. Logo, a grande disrrupção causada por este novo mercado te assustou um pouco, por ser um ambiente totalmente novo. </p>
            </MainBox>
        </>
    )
}