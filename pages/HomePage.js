import Navbar from "./components/Navbar";
import styled from '@emotion/styled'
import Image from "next/image";
import ilu2 from "../public/images/14.svg"
import ilu3 from "../public/images/2.svg"
import networking from "../public/images/networking.png"
import programming from "../public/images/programming.png"
import startup from "../public/images/startup.png"
import seguranca from "../public/images/seguranca.png"
import clementino from "../public/images/clementino.png"
import edmauro from "../public/images/edmauro.png"
import Footer from "./components/Footer";


export default function HomePage() {

    const HomeContainer = styled.div`
    width:100%;
    height:100vh;
    margin:0;
    padding:0;
    `;

    const HomeHeader = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    margin-bottom: 40px;
    > h1{
        font-weight: 500;
    }
    > p {
        font-weight: 300;
    }
    @media (max-width: 470px) {
      flex-direction: column;
      margin-top: 5rem;
    }
    `;

    const HomeSection = styled.div`
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

    const HomeSection2 = styled.div`
    width: 100%;
    max-height: max-content;
    display: flex;
    background: #000;
    color: #fff;
    align-items: center;
    justify-content: center;
    @media (max-width: 470px) {
      flex-direction: column;
      margin-top: 5rem;
    }

    `;

    const HomeSection3 = styled.div`
    max-height: max-content;
    justify-items: center;
    width: 100%;
    color: #000;
    > p{
        font-weight: 400;
    }
    @media (max-width: 470px){
      flex-direction: column;
      flex-wrap:wrap;
    }
    `;

    const Text = styled.div`
    text-align: justify;
    margin-right: 40px;
    margin-top: 70px;
    font-weight: 300;
    margin-left: 30px;
    `;

    const Title = styled.h3`
    text-align: center;
    font-weight: 500;
    `;

    const Title2 = styled.h3`
    text-align: center;
    font-weight: 500;
    color: #fff;
    `;

    const Boxs = styled.div`
    margin-bottom: 10rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    @media (max-width: 470px){
      flex-direction: column;
      flex-wrap: wrap;
    }
    `;

    const Box1 = styled.div`
    display: flex;
    max-height: max-content;
    max-width: max-content;
    background: #000;
    border-radius: 20px;
    margin: 10px;
    > p {
        text-align: justify;
        font-weight: 400;
        margin-left: 70px;
        margin-top: 40px;
        color: #fff;
    }
    `;
  const Box2 = styled.div`
  display: flex;
  max-height: max-content;
  max-width: max-content;
  background: #000;
  border-radius: 20px;
  margin: 10px;
  > p {
      text-align: justify;
      font-weight: 400;
      margin-left: 70px;
      margin-top: 40px;
      color: #fff;
  }

  `;



  return (
    <>
    <Navbar />
    <HomeContainer>
        <HomeHeader>
        <Image src={ilu2} width={2200} height={1200} alt="Imagem de ilustração" />
        <Text>
            <h1>Proporcionamos <br/>Soluções para o seu negocio !</h1>
            <p>Somos uma Startup Angolana que tem como objectivo
            prover serviços tecnologicos para Empresas e Pessoas Singulares que possuem ideias
            inovadoras, trabalhamos com o Feedback ponto a ponto com o cliente,
            prestando assim o melhor serviço possivel aos nossos clientes.</p>
        </Text>
        </HomeHeader>
        <Title>
            <h1>Serviços</h1>
        </Title>
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

        <HomeSection2>
       <Title2><h1>Nosso Team</h1></Title2>
       <div>
           <Image src={ilu3}  />
       </div>
            <Text><p>
                Somos formados por tecnicos ambiciosos com foco em soluções tecnologicas
                    afim de crescer no mercado Angolano e futuramente no mercado internacional, temos como objetivo tornar a tecnologia mais
                     acessivel e ajudando na resolução de problemas do dia a dia. <br/> <br/> Prestamos os nossos serviços ao melhor preço do mercado,
                     transmitindo mais confiança aos nossos parceiros e clientes, usamos metodologias ageis para o
                     Desenvolvimento dos Projetos e a mais rapida entrega dos trabalhos.
            </p>
            </Text>


        </HomeSection2>
        <Title><h1>Sobre nós</h1></Title>
        <HomeSection3>
            <Text>
                <p>
                    Somos uma startup fundada por dois jovens Angolanos Empreededores que pretendem revolucionar
                    o mercado tecnológico proporcionando soluções onde se deve a mais dificuldade de serviços a empresas e Pessoas
                    singulares que possuem ideias inovadoras mais não possuem conhecimentos para poder fazer que os
                    projetos saiam do papel e ganhem rendimentos. <br/> <br/>

                    Pretendemos ajudar no desenvolvimento do ensino em tecnologia em angola para que muitos jovens possam investir
                    e tornar o nosso pais cada vez mais desenvolvido tecnologicamente.  <br/> <br/>

                     Estamos dispostos a enfrentar os desafios do empreendedorismo digital e inovação e criando mais
                     oportunidades para o desenvolvimento das tecnologias do nosso pais.
                </p>
            </Text>
            <Boxs>
            <Box1>
                    <Image src={edmauro} width={100} height={200}/>
                    <p>Edmauro Goma <br/>
                        Co-Fundador<br/>
                        CTO<br></br>
                        Desenvolvidor FullStack<br/>
                        Web e Mobile<br>
                        </br>
                    </p>
                </Box1>
                <Box2>
                    <Image src={clementino} width={100} height={200}/>
                    <p>Clementino <br/>
                    Fundador <br/>
                    Administrador de Redes<br/>
                    Tecnico CCTV
                    </p>
                </Box2>
        </Boxs>

        </HomeSection3>
        <Footer />

    </HomeContainer>
    </>
  )
}
