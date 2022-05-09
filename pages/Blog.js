import Navbar from "./components/Navbar"
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Footer from "./components/Footer";

export default function Blog() {

  const PageContainer = styled.div`
  margin-top: -80px;
  `;

  const PageHeader = styled.div`
  width: 100%;
  height: 60vh;
  background: #2c73c5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #26D0CE, #1A2980); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
  > h1{
      font-weight: 300;
      color: #fff;
      text-align: center;
      justify-content: center;
      padding-top: 150px;
  }
  `;

  const PageSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `;

    const PageBox1 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    border-radius: 5px;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

    const PageBox2 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    border-radius: 5px;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

    const PageBox3 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    border-radius: 5px;
    > h3 {
      color: gray;
      font-weight: 300;
  }
    `;

    const PageBox4 = styled.div`
    width: 20%;
    height: 40vh;
    margin: 20px;
    border-radius: 5px;
    > h3 {
      color: gray;
      font-weight: 300;
  }`;

  const PageBox5 = styled.div`
  width: 20%;
  height: 40vh;
  margin: 20px;
  border-radius: 5px;
  > h3 {
    color: gray;
    font-weight: 300;
  }
  `;

  const PageBox6 = styled.div`
  width: 20%;
  height: 40vh;
  margin: 20px;
  border-radius: 5px;
  > h3 {
    color: gray;
    font-weight: 300;
  }
  `;

  const PageBox7 = styled.div`
  width: 20%;
  height: 40vh;
  margin: 20px;
  border-radius: 5px;
  > h3 {
    color: gray;
    font-weight: 300;
  }
  `;

  const PageBox8 = styled.div`
  width: 20%;
  height: 40vh;
  margin: 20px;
  border-radius: 5px;
  > h3 {
    color: gray;
    font-weight: 300;
  }`;

  const PageText = styled.div`
  >h2{
      text-align: center;
      color: gray;
      font-weight: 300;
  }
  `;
  

  return (
    <>
    <Navbar/>
    <PageContainer>

<PageHeader>
  <h1>Blog</h1>
</PageHeader>

<PageText>
    <h2>Ultimas Postagens</h2>
  </PageText>
<PageSection>
    <PageBox1>
    <Image src="/../public/images/meta.jpeg" width={300} height={150} alt="meta image"></Image>
        <h3>Meta abre acesso a modelo de linguagem de inteligência artificial</h3>
    <Link href="/BlogPage1"><a>Leia mais</a></Link>
    </PageBox1>
    <PageBox2>
    <Image src="/../public/images/electricar.png" width={300} height={150} alt="Post2 image"></Image>
    <h3>Nova bateria para carros leva 6 minutos para carregar 60%</h3>
    <Link href="/BlogPage2"><a>Leia mais</a></Link>
    </PageBox2>
    <PageBox3>
    <Image src="/../public/images/apache.jpg" width={300} height={150} alt="Post2 image"></Image>
    <h3>Ubuntu Server: Aprenda a instalar um servidor Apache para alojar site</h3>
    <Link href="/BlogPage3"><a>Leia mais</a></Link>
    </PageBox3>
    <PageBox4>
    <Image src="/../public/images/eua.jpeg" width={300} height={150} alt="Post2 image"></Image>
    <h3>Empresas americanas interessadas em investir tecnologicamente em Angola</h3>
    <Link href="/BlogPage4"><a>Leia mais</a></Link>
    </PageBox4>
    <PageBox5>
    <Image src="/../public/images/angosat.jpg" width={300} height={150} alt="Post2 image"></Image>
    <h3>Sanções a Rússia poderão ter um impacto na construção e entrega do Angosat-2</h3>
    <Link href="/BlogPage5"><a>Leia mais</a></Link>
    </PageBox5>
    <PageBox6>
    <Image src="/../public/images/elon.webp" width={300} height={150} alt="Post2 image"></Image>
    <h3>Elon Musk deverá ser “temporariamente” o CEO do Twitter</h3>
    <Link href="/BlogPage6"><a>Leia mais</a></Link>
    </PageBox6>
    <PageBox7>
    <Image src="/../public/images/criptom.jpg" width={250} height={130} alt="Post2 image"></Image>
    <h3>BNA realiza Conferência sobre Activos Virtuais</h3>
    <Link href="/BlogPage7"><a>Leia mais</a></Link>
    </PageBox7>
    <PageBox8>
    <Image src="/../public/images/africatec.jpeg" width={300} height={150} alt="Post2 image"></Image>
    <h3>Startups nigerianas vencem primeira edição do Africa Tech Awards</h3>
    <Link href="/BlogPage8"><a>Leia mais</a></Link>
    </PageBox8>

</PageSection>
    <Footer />
</PageContainer>
    </>
  )
}
