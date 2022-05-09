import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle6() {

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
                <ArticleImage><Image src="/../public/images/criptom.jpg" width={600} height={300} alt="elon musk image"></Image></ArticleImage>
                <ArticleText>
                <h1>Elon Musk deverá ser “temporariamente” o CEO do Twitter</h1>
                <p>
                A cadeia televisiva CNBC está a avançar com a notícia de que Elon Musk deverá servir de CEO temporário do Twitter nos meses que se seguirem após a concretização da aquisição da empresa.
                Recordar que o atual CEO do Twitter, Parag Agrawal, chegou ao cargo há apenas poucos meses. Em novembro de 2021, o então CEO (e co-fundador) Jack Dorsey anunciou a saída da empresa, abrindo então portas à entrada de Agrawal que, com esta aquisição de Elon Musk, deixará de ser CEO da tecnológica.<br/>
                <br/>
                A confirmar-se esta notícia, Elon Musk terá de equilibrar o cargo de CEO do Twitter com a liderança da Tesla e da SpaceX, empresas onde também ocupa a posição de CEO. Isto além da The Boring Company e da Neuralink, empresas criadas por Musk onde também desempenha cargos de liderança.
                </p>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
