import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle8() {

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
                  <Image src="/../public/images/africatec.jpeg" width={600} height={300} alt="africatech image"></Image></ArticleImage>
                <ArticleText>
                    <h1>Startups nigerianas vencem primeira edição do Africa Tech Awards</h1>
                <p>
                As multinacionais  Finance Corporation (IFC) e a Viva Technology escolheram duas startups nigerianas, nomeadamente Primed E-health e Koolboks, como as vencedoras da primeira edição do Africa Tech Awards.<br/>
                <br/><br/>
                Segundo os organizadores, as duas startups vencedoras foram escolhidas entre 45 startups finalistas, impulsionam inovações no continente africano, em uma edição que reuniu um grupo de mais de 300 inscrições lideradas por startups da Nigéria, bem como do Egito, Quênia, República Democrática do Congo, África do Sul e Marrocos.
                <br/><br/>
                Sobre as vencedoras, a Prime E-health é uma startup que utiliza tecnologia para fornecer soluções de saúde, surgiu entre as 15 maiores de tecnologia de saúde da África, enquanto a Koolboks é uma startup que oferece produtos ecológicos de refrigeração solar e foi nomeada na categoria Climate Tech.
                <br/><br/>
                O Africa Tech Awards é uma  iniciativa pan-africana, que tem como objectivo reconhecer e apoiar startups emergentes que estão impulsionar o impacto da inovação e do desenvolvimento em todo o continente em três sectores principais: Climate Tech, FinTech e Health Tech.
                <br/><br/>
                Makhtar Diop, director do IFC, diz que o número e a qualidade das aplicações recebidas é prova do cenário tecnológico vibrante do continente, onde prova que é resiliente mesmo diante dos muitos desafios causados pela pandemia COVID-19.
                <br/><br/>
                <strong>“Esses prémios ajudarão a escalar inovações em sectores-chave como tecnologia climática, saúde e serviços financeiros, que são fundamentais para apoiar o crescimento sustentável e inclusivo do continente“, disse Diop.</strong>
                <br/><br/>
                Por outro lado, os co-presidentes da Viva Technology, Maurice Lévy e Pierre Louette, bem como a directora Julie Ranty, disseram que a África é um terreno fértil para talentos e novas ideias e estão satisfeitos em ver tantos empreendedores inovadores a participar da primeira edição do AfricaTech Awards.
                </p>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
