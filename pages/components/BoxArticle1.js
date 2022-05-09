import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle1() {

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
                <Image src="/../public/images/meta.jpeg" width={600} height={300} alt="Post1 image"></Image>
                </ArticleImage>
                <ArticleText>
                    <h1>Meta abre acesso a modelo de linguagem de inteligência artificial</h1>
                <p>
                    Na última terça-feira (3), a Meta, dona do Facebook, revelou que está abrindo acesso a um modelo de linguagem para aumentar a pesquisa na área de inteligência artificial. A companhia acredita que a possibilidade melhorará as habilidades dos pesquisadores e o entendimento sobre grandes modelos de linguagem.
                    Os grandes modelos de linguagem são sistemas de processamento de linguagem natural que usam grandes volumes de informação para gerar respostas ou outras informações. A Meta acredita que as restrições ao uso dessas categorias de modelo impedem o progresso da área.
                    O modelo Open Pretrained Transformer (OPT-175B) é o primeiro com 175 bilhões de parâmetros a ser disponibilizado para a comunidade de pesquisa de inteligência artificial — a versão disponível contará com modelos pré-treinados e o código para treiná-los. Segundo a Meta, o estudo da área é extremamente importante para o desenvolvimento de diversas tecnologias e serviços.<br/>
                    <br/>Comunidade de Inteligência Artificial
                    “Acreditamos que toda a comunidade de IA deve trabalhar em conjunto para desenvolver diretrizes claras sobre IA responsável e, em particular, sobre grandes modelos de linguagem responsáveis, dada sua centralidade em muitos aplicativos de linguagem downstream”, foi revelado em comunicado oficial.
                    O que o urso polar tem a ver com inteligência artificial?
                    De acordo com a companhia responsável pelo Facebook, o acesso ao grande modelo de linguagem estará disponível aos pesquisadores acadêmicos, organizações acadêmicas, pessoas filiadas ao governo, sociedade civil e laboratórios de pesquisa da indústria.
                    A inteligência artificial pode contrair o viés e toxicidade dos seres humanos e, por isso, alguns estudiosos acreditam que a popularidade dos grandes modelos de linguagem pode piorar a situação e perpetuar preconceitos sociais, de raça ou de gênero.
                </p>
                <hr/>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
