import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle7() {

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
                  <Image src="/../public/images/criptom.jpg" width={600} height={300} alt="elon musk image"></Image>
                </ArticleImage>
                <ArticleText>
                    <h1>BNA realiza Conferência sobre Activos Virtuais</h1>
                <p>
                O Banco Nacional de Angola (BNA), realizou na última semana, a Conferência sobre “Activos virtuais”, através da plataforma Zoom, reuniões que se enquadram no Ciclo Anual de Conferências, iniciado em 2018.
                <br/>
                <br/><br/>
                O discurso de abertura veio por intermédio de Pedro Castro e Silva, Administrador Executivo do BNA, onde disse que o que se tem observado nos últimos 15 anos é uma mudança na estrutura do sistema financeiro, a nível mundial. Esta mudança traduz-se, por um lado, na entrada de novas instituições intermediárias de moeda emitida pelos bancos centrais.
                <br/><br/>
                Para Castro e Silva, existem entidades cuja matriz é tecnológica e/ou de telecomunicações que passaram a fazer parte do sistema financeiro, como é o caso das maiores empresas de telecomunicações em diversos países emergentes que são os oferentes mais importantes do serviço de Mobile Money. Para além destas, prosseguiu o Administrador, temos as fintechs que, de forma crescente vêm participando na intermediação de moeda do banco central, por via de vários serviços como open banking, open finance, análise de risco de crédito, microfinanças, etc.
                Ainda no seu discruso, para além da entrada de novas instituições intermediárias de moeda emitida pelos bancos centrais, que é um fenómeno que está a alterar o sistema financeiro nacional e internacional, de forma estrutural, nomeadamente às finanças descentralizadas.
                <br/><br/>
                Nesta realidade, irreversível e em potência, as transacções financeiras não ocorrem com recurso à troca de posições de reservas no banco central, mas sim com base em contratos inteligentes assentes numa tecnologia que hoje todos conhecemos, o blockchain. Acresce outro facto. O instrumento de troca não é a moeda centralmente emitida e regulada pelos bancos centrais, mas sim outras como as stablecoins e as criptomoedas. Existem mais de 4.000 criptomoedas com valor de mercado que chegou já a atingir o equivalente a dois biliões de dólares dos Estados Unidos.
                <br/><br/>
                De informar que o webinar foi dividido em dois painéis, onde foram abordados temas actuais como, os activos virtuais– serviços e tecnologias associadas e regulação dos activos virtuais- realizações e desafios, com apresentações realizadas por representantes da Blockchain Academy, Binance, Plataforma Tech 21 África, UIF e dos Bancos da China e Portugal.
                <br/><br/>
                A conferência sobre activos virtuais permitiu ainda analisar soluções adoptadas por países e organizações internacionais de referência, de modo a servir de subsídio para a definição de um caminho a seguir pelos reguladores do sistema financeiro angolano.
O referido evento contou com a participação de membros do Conselho de Administração do BNA, representantes do Conselho de Supervisores do Sistema Financeiro (CSSF), especialistas nacionais e internacionais, académicos, empresários e representantes de instituições financeiras públicas e privadas.​
                </p>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
