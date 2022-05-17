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
                  <Image src="data:image/jpeg;base64,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" width={600} height={300} alt="africatech image"></Image></ArticleImage>
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
