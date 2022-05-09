import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle4() {

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
                <ArticleImage><Image src="/../public/images/eua.jpeg" width={600} height={300} alt="Eua image"></Image></ArticleImage>
                <ArticleText>
                    <h1>Empresas americanas interessadas em investir tecnologicamente em Angola</h1>
                <p>
                Mais de 16 empresas americanas manifestaram interesse em investir em Angola com objectivo de criar empregos e transferência de tecnologia, e onde os contratos estão a ser negociados com as autoridades angolanas, segundo o embaixador dos Estados Unidos da América em Angola.<br/>
                <br/>
                Pelo que foi revelado por Tulinabo Mushingi, caso o Executivo Nacional efective um contrato com uma das empresas norte-americanas, a mesma trará tecnologia e vai formar os angolanos, bem como garantir empregos locais, mas “é preciso que haja transparência nos contratos celebrados”, disse.
                Ainda nesse mesmo encontro esteve o Ministro do Interior, Eugénio Laborinho, que informou que os acordos rubricados são para serem cumpridos na íntegra e permitir que se faça o que está estabelecido.
                </p>
                <hr/>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
