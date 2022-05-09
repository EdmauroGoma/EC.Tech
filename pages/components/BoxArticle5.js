import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle5() {

  const ArticleContainer = styled.div`
  width: 60%;
  max-height: max-content;
  box-sizing: content-box;
  margin-left: 30px;
  margin-bottom: 30px;
  `;

  const ArticleItems = styled.div``;

  const ArticleImage = styled.div``;

  const ArticleText = styled.div`
  >h1 {
    font-size: 3em;
    font-weight: 300;
  }
  > p{
    font-size: 1.3em;
    font-weight: 300;
  }
  `;


  return (
    <>
        <ArticleContainer>
            <ArticleItems>
                <ArticleImage><Image src="/../public/images/angosat.jpg" width={600} height={300} alt="angosat2 image"></Image></ArticleImage>
                <ArticleText>
                    <h1>Sanções a Rússia poderão ter um impacto na construção e entrega do Angosat-2</h1>
                <p>
                As sanções do Ocidente a Rússia, devido a invasão na Ucrânia, poderão ter um impacto na construção e entrega do Angosat-2, programado para entrar em órbita antes das Eleições Gerais em Angola, Agosto próximo.<br/>
                <br/>
                Essa informação foi revelada por Vladimir Tararov, embaixador da Rússia em Angola, falando à agência de notícias estatal da Rússia, Ria Novosti, onde deixou duras criticas aos franceses da Airbus e afirma que não honraram os acordos para construção dos componentes do satélite angolano.
                Tendo em conta esses todos contratempos, o diplomata russo diz que o lançamento poderá acontecer antes de Agosto, bem como admite a possibilidade de se estender para o mês de Setembro próximo.
                <br/><br/> 
                Tendo em conta esses todos contratempos, o diplomata russo diz que o lançamento poderá acontecer antes de Agosto, bem como admite a possibilidade de se estender para o mês de Setembro próximo.
                <br/><br/>
                “Tínhamos um lançamento planeado para Março e estávamos empenhados em fazê-lo. Já estava tudo preparado para cumprirmos atempadamente as obrigações contratuais. Infelizmente, porém, os nossos parceiros ocidentais, aparentemente invejosos do nosso sucesso na indústria espacial, começaram a criar obstáculos“, disse Vladimir Tararov.
                <br/><br/>
                Sobre os testes de referência do Angosat-2, o embaixador informa que “estão agora bem encaminhados para a sua conclusão“, assegurando o planeamento do lançamento “antes das eleições em Angola“.
                <br/><br/>
                Se, digamos, houver quaisquer dificuldades durante os testes, não será antes de Setembro“, sublinha Tararov a Ria Novosti.
                <br/><br/>
                Pelo que conta a comitiva da Rússia, a Airbus deveriam fornecer peças menores mas bastante importantes para o satélite, os chamados “disjuntores de ondas“.
                <br/><br/>
                “Não os entregaram, embora o pudessem ter feito, porque já estavam prontos. Decidimos então que seríamos nós próprios a fazê-lo, pedimos-lhes a documentação técnica, mas eles recusaram-nos. Isto tornou muito mais difícil testar completamente este satélite. Analisei especificamente o documento de sanções, que dizia que se o contrato fosse assinado antes de as sanções serem impostas, então poderia ser cumprido até ao fim. Mas mesmo assim recusaram-se a fazê-lo“, acrescentou Vladimir Tararov.
                Segundo fontes angolanas ligadas ao processo de construção e lançamento do Angosat-2, contactadas pelo jornal angolano Expansão, dizem que a decisão final sobre a data, antes ou depois das eleições gerais, é “meramente política” e que o plano se mantém sem alterações.
                </p>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
