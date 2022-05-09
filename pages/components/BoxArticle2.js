import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle2() {

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
                <ArticleImage>
                <Image src="/../public/images/electricar.png" width={600} height={300} alt="Electric car image"></Image>
                </ArticleImage>
                <ArticleText>
                    <h1>Nova bateria para carros leva 6 minutos para carregar 60%</h1>
                <p>
                É indiscutível que o segmento dos veículos elétricos tem crescido bastante. Além disso, as infraestruturas de carregamento têm também vindo a sofrer melhorias e há cada vez mais pontos de carregamento.
                Também ao nível das baterias há novidades. Uma nova bateria, inventada por investigadores chineses, leva 6 minutos para carregar 60% de um carro elétrico.<br/>
                <br/>
                As baterias têm sido um dos pontos menos fortes no segmento dos veículos elétricos. As investigações são muitas e os resultados vão começando a aparecer. A mais recente novidade chega-nos da China, após um grupo de investigadores ter conseguido desenhar uma bateria que leva 6 minutos para carregar 60%. Para se ter uma base de comparação, uma bateria de um Tesla leva cerca de 30 minutos para atingir 80% da carga, isto se for carregada num ponto de super carregaamento.
                Qual o segredo da nova bateria para veículos?
                De acordo com as informações, os investigadores chineses procederam a uma ordenação das partículas de iões de lítio. As baterias elétricas tradicionais, utilizam agentes ligantes para solidificar o ânodo (elétrodo através do qual a carga elétrica positiva flui para o interior de um dispositivo elétrico polarizado).
                </p>
                <hr/>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
