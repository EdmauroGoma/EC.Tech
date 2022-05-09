import Navbar from "./components/Navbar"
import Link from "next/link";
import styled from '@emotion/styled'
import Image from "next/image";
import Footer from "./components/Footer";

export default function servicos() {

  const PageContainer = styled.div`
  margin-top: -80px;
  `;

  const PageHeader = styled.div`
  width: 100%;
  height: 60vh;
  background: #2c73c5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #26D0CE, #1A2980); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
  > h4{
      font-weight: 300;
      font-size: 2em;
      color: #fff;
      text-align: center;
      justify-content: center;
      padding-top: 100px;
  }
  `;

  const PageSection = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  `;

    const PageBox1 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

    const PageBox2 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

    const PageBox3 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

    const PageBox4 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    > h3 {
      color: gray;
      font-weight: 300;
  }`;


  const PageFooter = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #191d31ec;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  color: rgb(187, 182, 182);
  text-align: justify;
  `;

  const FooterList1 = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  
  `;

  const FooterList2 = styled.div`
  align-items: center;
  justify-content: center;
  list-style: none;
  `;

  const FooterList3 = styled.div`
  align-items: center;
  justify-content: center;
  `;

  const FooterCopy = styled.div`
  width: 100%;
  height: 5vh;
  text-align: center;
  color: gray;
  background: #191d31ec;
  margin-top: -21px;
  `;

  const PageText = styled.div`
  >h2{
      text-align: center;
      color: gray;
      font-weight: 300;
  }
  `;
  

  return (
    <>
    <Navbar />
    <PageContainer>

      <PageHeader>
        <h4>Prestamos os nossos serviços ao melhor preço do mercado, transmitindo mais confiança aos nossos parceiros e clientes,
           usamos metodologias ageis para o Desenvolvimento dos Projetos e a mais rapida entrega dos trabalhos. <br/>
        </h4>
      </PageHeader>

      <PageText>
          <h2>Serviços</h2>
        </PageText>
      <PageSection>
          <PageBox1>
          <Image src="/../public/images/networking.png" width={350} height={250} alt="Redes Computadores image"></Image>
              <h3>Redes de Computadores</h3>
          </PageBox1>
          <PageBox2>
          <Image src="/../public/images/seguranca.png" width={200} height={200} alt="Segurança Electrônica image"></Image>
              <h3>Segurança Electrônica (CCTV) </h3>
          </PageBox2>
          <PageBox3>
          <Image src="/../public/images/programming.png" width={400} height={300} alt="Programming image"></Image>
              <h3>Desenvolvimento Web e Mobile</h3>
          </PageBox3>
          <PageBox4>
              <Image src="/../public/images/startup.png" width={200} height={200} alt="Marketing image"></Image>
            <h3>Marketing Digital e Consultadoria de Projectos</h3>
          </PageBox4>
      </PageSection>
      <Footer />
    </PageContainer>
    </>
  )
}
