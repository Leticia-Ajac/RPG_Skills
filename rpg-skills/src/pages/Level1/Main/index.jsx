import MainBox from "../../../components/Boxes/MainBox";

export default function Level1Main() {

    return(
        <>
        <MainBox
            name="Gustavo"
            level="1"
            rightOption = "option_3"
            to="/Level2Main"
            selectBtnOne = "Eu me mantenho calmo e confortável com a situação. Como seria algo totalmente novo e tomaria 100% do meu dia, levarei o aprendizado como algo cotidiano, sem nenhuma necessidade de buscar conhecimentos ou mesmo perguntar a alguém sobre. Todas as respostas vão vir para mim em algum momento."
            selectBtnTwo = "Eu busco de todas as formas possíveis adquirir todo o conhecimento necessário para atuar da melhor maneira possível em minha área. Assim terei mais clareza ao montar o escopo do projeto e direcionar as tarefas entre a equipe"
            selectBtnThree = "Eu finjo estar totalmente a par do assunto, pois minha equipe precisa visualizar eu como um líder experiente que possui mais conhecimento do que os demais e, portanto, admitir ingenuidade só faria com que meus liderados não me enxergassem como uma referência."
            >
                <p>Em uma manhã de segunda feira, lá estava você estava subindo as escadas com o objetivo de chegar até o terceiro andar do edifício de São Paulo da fintech mais conhecida do país, o PicPay. Contratado recentemente, Gustavo enfrentava seu primeiro dia de trabalho como novo PM da BU de Crypto, um grande desafio, visto também que era um negócio recente da empresa que se encontrava em ascensão. <br /><br />

                Ao chegar lá, você se depara com várias pessoas diferentes, porém você também possui diversas coisas que precisa resolver durante esta nova jornada, o que você faz primeiro? </p>
            </MainBox>
        </>
    )
}