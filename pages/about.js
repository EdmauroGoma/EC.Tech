import Image from "next/image";
import clementino from "../public/images/clementino.png"
import edmauro from "../public/images/edmauro.png"
import styled from '@emotion/styled'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function about() {

    const HomeSection3 = styled.div`
    max-height: max-content;
    justify-items: center;
    width: 100%;
    height: 90vh;
    color: #000;
    > p{
        font-weight: 400;
    }
    @media (max-width: 470px){
      display: flex;
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
    width: 30%;
    height: 25vh;
    background: #2c73c5;
    border-radius: 20px;
    margin: 10px;
    > p {
        text-align: justify;
        font-weight: 400;
        margin-left: 70px;
        margin-top: 40px;
        color: #fff;
    }

    @media (max-width: 470px){
      flex-direction: column;
      flex-wrap: wrap;
    }
    `;

  const Box2 = styled.div`
  display: flex;
  width: 30%;
  height: 25vh;
  background: #2c73c5;
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
                    <Image src={edmauro} width={100} height={200} alt="imagem de uma pessoa"/>
                    <p>Edmauro Goma <br/>
                        Co-Fundador<br/>
                        CTO
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
        <Footer />
        </HomeSection3>
    </>
  )
}
