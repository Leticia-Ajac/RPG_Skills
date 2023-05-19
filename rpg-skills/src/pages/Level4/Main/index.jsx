import MainBox from "../../../components/Boxes/MainBox";
import bugCat from '../gato bugado.jpg'
import lvImageFour from '../nivel_4.png'

export default function Level3Main() {

    return(
        <>
        <MainBox
            name="ScarpaCat"
            level="4"
            image= {bugCat}
            lvimage={lvImageFour}
            rightOption = "option_1"
            to="/Level5Main"
            selectBtnOne = "Eu decido seguir em uma solução criativa, um vídeo! Assim solicitarei para minha equipe as melhores pessoas em inglês, garantindo um entendimento claro por parte dos estadunidenses da outra empresa e também tornando possível a melhor compreensão do problema (ao mostrá-lo dentro do aplicativo)"
            selectBtnTwo = "Quanto menos confusão para essa situação, melhor! Irei usar do meu melhor valor do instituto J&F #simplicidade,  montar um texto rápido com um resumo do problema, encaminhá-lo por e-mail e agora é só esperar por uma resposta. Eles que achem um método para identificar o problema a partir de meu relato"
            selectBtnThree = "Eles já são muito mais experientes do que nós e vão resolver rapidinho, enquanto isso, posso utilizar meu foco para atender aos próximos tópicos do Backlog. Já que não é responsabilidade minha ver os erros da minha empresa terceira"
            >
                Em um dia cansativo de trabalho, você se deparou com uma situação muito inusitada. Por meio do canal de #random do slack, alguém te marcou em um comentário de outro funcionário relatando um problema de erro na notificação de rendimento de Crypto. Quando você verificou com sua equipe, descobriu que havia algum erro de código no aplicativo que estava trocando as notificações entre os usuários, criando um caos.  
                <br/><br/>
                Foi descoberto também que a origem do bug se dava por uma empresa terceirizada, que presta serviços ao PicPay. Porém havia um grande obstáculo para se comunicar com a parceira, o primeiro era que a empresa não é do Brasil e sim dos Estados Unidos, o que também ocasionava muita distância e dificuldade para a situação. Era um tópico urgente e você precisa pensar rápido. Como se comunicar? 
            </MainBox>
        </>
    )
}