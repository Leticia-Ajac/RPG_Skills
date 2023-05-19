import BigBox from "../../../components/Boxes/BigBox";
import "./style.css"
import gato_feliz from "../gato_feliz.gif"
import gato_triste from "../gato_triste.gif"
import gato_oculos from "../gato_oculos.gif"


export default function Conclusion() {
    const acertou = localStorage.getItem('rightOptions')

    if (acertou <= 1) {
        return(
            <>
                <BigBox
                    title='😿 Desenvolva mais suas Skills 😿'
                    btn='Jogar Novamente'
                    to='/'
                > <p>
                    A maioria das decisões que você tomou não foram tão assertivas quando deveriam ser para solucionar as situações. Cuidado, reveja os aspectos de sua tomada de decisão para garantir que no seu dia a dia você tenha cada vez mais todas as soft skills e hard skills necessárias (cuidado, se continuar assim, você pode “ir de Lúcio Moura” a qualquer momento) 
                </p>
                    
                    <img className="gato_gif" src={gato_triste} />
                </BigBox>
            </>
        )
    } else if (acertou <= 4) {
        return(
            <>
                    <BigBox
                        title= {`🐱 Nada mal! 🐱`}
                        btn='Jogar Novamente'
                        to='/'
                    > <p>
                        Você conseguiu tomar as decisões assertivas em metade das situações, não é algo ruim, porém devemos estar em um constante processos de melhoria, para superar nossos limites. Talvez você precise treinar mais um pouco suas soft ou hard skills. Tente novamente na próxima.  
                    </p>
                        <img className="gato_gif" src={gato_feliz} />
                    </BigBox>
            </>
        )
    } else if (acertou > 4)
        return(
            <>
                    <BigBox
                        title={`🐱‍👤Parabéns, suas skills estão afiadas!!🐱‍👤`}
                        btn='Jogar Novamente'
                        to='/'
                    >   <p>
                            Olha só, temos um PM nato aqui! Esse é um especialista exemplar! Você conseguiu concluir nosso jogo sobre Soft e Hard skills com excelência!  Isto mostra que você tem uma grande capacidade para tomar decisões assertivas, pensando no melhor para sua equipe, de maneira rápida e objetiva! 
                        </p>
                        <img className="gato_gif" src={gato_oculos} />
                    </BigBox>
            </>
        )
}