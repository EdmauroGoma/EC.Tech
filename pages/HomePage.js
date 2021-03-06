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
        <Image src={ilu2} width={2200} height={1200} alt="Imagem de ilustra????o" />
        <Text>
            <h1>Proporcionamos <br/>Solu????es para o seu negocio !</h1>
            <p>Somos uma Startup Angolana que tem como objectivo
            prover servi??os tecnologicos para Empresas e Pessoas Singulares que possuem ideias
            inovadoras, trabalhamos com o Feedback ponto a ponto com o cliente,
            prestando assim o melhor servi??o possivel aos nossos clientes.</p>
        </Text>
        </HomeHeader>
        <Title>
            <h1>Servi??os</h1>
        </Title>
        <HomeSection>

            <SectionItem>
                <Image src={networking}  alt="imagem de Redes de computadores"/>
                <h3>Redes de Computadores</h3>
                <p>Prestamos os melhores servi??os na montagem e manuten????o da sua Redes de computadores
                    Servi??os de manuten????o e repara????o de problemas por acesso remoto
                </p>
            </SectionItem>
            <SectionItem>
                <Image src={programming} width={300} height={160} alt="imagem de programa????o"/>
                <h3>Desenvolvimento Web e Mobile</h3>
                <p>Desenvolvemos sistemas de acordo a necessidade da sua empresa desde pequenos Websites a apicativos
                    com integra????o a API`S complexas tudo de acordo para que o seu negocio ganhe mais escalablidade
                </p>
            </SectionItem>
            <SectionItem>
                <Image src={startup} width={200} height={200} alt="imagem de design"/>
                <h3>Marketing Digital e Design</h3>
                <p>Publicidade feita da melhor forma pode fazer com que o seu negocio ganhe mais escalablidade em quest??o de clientes</p>
            </SectionItem>
            <SectionItem>
                <Image src={seguranca} width={200} height={200} alt="imagem de cctv"/>
                <h3>Circuito Televisivo de Seguran??a (CCTV)</h3>
                <p>Prestamos tambem servi??os de CCTV automatizado para a melhor Seguran??a do seu negocio</p>
            </SectionItem>
        </HomeSection>

        <HomeSection2>
       <Title2><h1>Nosso Team</h1></Title2>
       <div>
           <Image src={ilu3}  alt="imagem de ilustra????o" />
       </div>
            <Text><p>
                Somos formados por tecnicos ambiciosos com foco em solu????es tecnologicas
                    afim de crescer no mercado Angolano e futuramente no mercado internacional, temos como objetivo tornar a tecnologia mais
                     acessivel e ajudando na resolu????o de problemas do dia a dia. <br/> <br/> Prestamos os nossos servi??os ao melhor pre??o do mercado,
                     transmitindo mais confian??a aos nossos parceiros e clientes, usamos metodologias ageis para o
                     Desenvolvimento dos Projetos e a mais rapida entrega dos trabalhos.
            </p>
            </Text>


        </HomeSection2>
        <Title><h1>Sobre n??s</h1></Title>
        <HomeSection3>
            <Text>
                <p>
                    Somos uma startup fundada por dois jovens Angolanos Empreededores que pretendem revolucionar
                    o mercado tecnol??gico proporcionando solu????es onde se deve a mais dificuldade de servi??os a empresas e Pessoas
                    singulares que possuem ideias inovadoras mais n??o possuem conhecimentos para poder fazer que os
                    projetos saiam do papel e ganhem rendimentos. <br/> <br/>

                    Pretendemos ajudar no desenvolvimento do ensino em tecnologia em angola para que muitos jovens possam investir
                    e tornar o nosso pais cada vez mais desenvolvido tecnologicamente.  <br/> <br/>

                     Estamos dispostos a enfrentar os desafios do empreendedorismo digital e inova????o e criando mais
                     oportunidades para o desenvolvimento das tecnologias do nosso pais.
                </p>
            </Text>
            <Boxs>
            <Box1>
                    <Image src={edmauro} width={100} height={200} alt="imagem de uma pessoa"/>
                    <p>Edmauro Goma <br/>
                        Co-Fundador<br/>
                        CTO<br></br>
                        Desenvolvidor FullStack<br/>
                        Web e Mobile<br>
                        </br>
                    </p>
                </Box1>
                <Box2>
                    <Image src={clementino} width={100} height={200} alt="imagem de uma pessoa"/>
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
