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
                  <Image src="data:image/jpeg;base64,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" width={600} height={300} alt="elon musk image"></Image>
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
