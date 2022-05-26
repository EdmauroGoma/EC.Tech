import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "@emotion/styled";
import networking from "../public/images/networking.png"
import programming from "../public/images/programming.png"
import startup from "../public/images/startup.png"
import seguranca from "../public/images/seguranca.png"


function serviços() {

    const HomeSection = styled.div`
    width: 100%;
    max-height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    > h1 {
        text-align: center;
        font-weight: 300;
    }

    @media (max-width: 470px) {
      flex-direction: column;
      margin-top: 5rem;
    }
    `;

    const SectionItem = styled.div`
    width:100%;
    height: 60vh;
    box-shadow: 1px 1px 3px 2px gray;
    margin: 10px;
    border-radius: 5px;
    > h3 {
        text-align: center;
        font-weight: 500;
    }
    >p {
        text-align: justify;
        margin: 30px;
        font-weight: 300;
    }
    @media(max-width: 470px){
      max-height: max-content;
      max-width: max-content;
      align-content: center;
      justify-content: center;
    }
    `;


  return (
      <>
    <Navbar />
    <HomeSection>

        <SectionItem>
            <Image src={networking} />
            <h3>Redes de Computadores</h3>
            <p>Prestamos os melhores serviços na montagem e manutenção da sua Redes de computadores
                Serviços de manutenção e reparação de problemas por acesso remoto
            </p>
        </SectionItem>
        <SectionItem>
            <Image src={programming} width={300} height={160} />
            <h3>Desenvolvimento Web e Mobile</h3>
            <p>Desenvolvemos sistemas de acordo a necessidade da sua empresa desde pequenos Websites a apicativos
                com integração a API`S complexas tudo de acordo para que o seu negocio ganhe mais escalablidade
            </p>
        </SectionItem>
        <SectionItem>
            <Image src={startup} width={200} height={200}/>
            <h3>Marketing Digital e Design</h3>
            <p>Publicidade feita da melhor forma pode fazer com que o seu negocio ganhe mais escalablidade em questão de clientes</p>
        </SectionItem>
        <SectionItem>
            <Image src={seguranca} width={200} height={200}/>
            <h3>Circuito Televisivo de Segurança (CCTV)</h3>
            <p>Prestamos tambem serviços de CCTV automatizado para a melhor Segurança do seu negocio</p>
        </SectionItem>
    </HomeSection>
    <Footer />
</>
  )
}

export default serviços