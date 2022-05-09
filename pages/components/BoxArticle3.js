import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle3() {

  const ArticleContainer = styled.div`
  width: 60%;
  max-height: max-content;
  box-sizing: border-box;
  margin-left: 30px;
  margin-bottom: 30px;
  text-align: justify;
  align-items: center;
  justify-content: center;
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
                <ArticleImage><Image src="/../public/images/apache.jpg" width={700} height={300} alt="Post2 image"></Image></ArticleImage>
                <ArticleText>
                    <h1>Ubuntu Server: Aprenda a instalar um servidor Apache para alojar sites</h1>
                <p>
                No Pplware já disponibilizamos vários artigos que ensinam a transformar uma máquina Linux num servidor LAMP (Linux + Apache + MySQL + PHP). Basicamente um LAMP é um conjunto de serviços sobre Linux, que nos permitem criar um verdadeiro servidor Web (Apache2 – para colocar conteúdos online como, por exemplo, sites, plataformas como WordPress, Joomla, wikis, etc) com suporte para a linguagem de programação PHP e para o serviço de base de dados MySQL.
                Hoje vamos começar por aprender com instalar o Apache.
                <br/>
                <br/> O Apache é um dos servidores Web mais usado em todo o mundo. Flexibilidade, documentação e uma enorme comunidade, são alguns dos pontos fortes que marcam a diferença do Apache para a concorrência. O Apache Web Server foi criado em 1995 por Rob McCool que na altura era funcionário da NCSA (National Center for Supercomputing Applications). Este servidor web é distribuído numa variedade de plataformas impressionante, deste o Windows, Linux, Novel, Mac, OS/2 BeOS, entre outros.
                     Como instalar e configurar o Apache no Ubuntu Server 21.10<br/>

                    <br/>A instalação do Apache no Ubuntu é algo relativamente simples. Para isso devem seguir os seguintes passos.<br/>

                    <br/>Passo 1 - Atualização do Sistemas

                    <br/>Para começar é aconselhado atualizar o sistema usando os seguintes comandos:<br/>

                    <br/>sudo apt update
                        sudo apt upgrade<br/>

                    <br/>Passo 2 - Instalar o Apache e Utilitários<br/>

                    <br/>Para instalar o Apache e utilitários basta que usem o seguinte comando:<br/>

                    <br/>sudo apt install -y apache2 apache2-utils<br/>

                    <br/>Passo 3 - Arrancar o serviço Para arrancar o serviço basta que usem o comando:<br/>

                    <br/>systemctl start apache2<br/>

                    <br/>Nota: Tal como em outros serviços, é possível parar o serviço e ver o estado do mesmo usando os seguintes comandos:<br/>

                    <br/>systemctl stop apache2
                    systemctl status apache2<br/>

                    <br/>O output deverá ser algo semelhante ao apresentado na imagem seguinte:<br/>
                    <Image src="/../public/images/apache1.jpg" width={700} height={300} alt="apache1 image"></Image>

                    <br/> Ubuntu Server: Aprenda a instalar um servidor Apache para alojar sites<br/>

                    <br/>Para verificar se tudo funciona, basta que introduzam o IP no browser e verifiquem se aparece a página por omissão do Apache.<br/>

                    <Image src="/../public/images/apache2.jpg" width={700} height={300} alt="apache2 image"></Image>

                    <br/>Ubuntu Server: Aprenda a instalar um servidor Apache para alojar sites<br/>

                    <br/>Passo 4 - Configuração de Firewall<br/>

                    <br/>Se tiver a firewall do Ubuntu Server ativa, é necessário que abra as comunicações para o porto lógico 80. Para tal execute o seguinte comando:<br/>

                    <br/>sudo ufw allow http

                    <br/>Por fim devem forçar que o diretório /var/www/html/ tenha como dono e grupo www-data<br/>

                    <br/>sudo chown www-data:www-data /var/www/html/ -R<br/>

                    <br/>Ao reiniciar o serviço, se tiver um problema de (fully qualified domain name) como mostra a imagem seguinte...<br/>

                    <Image src="/../public/images/apache3.jpg" width={700} height={300} alt="apache3 image"></Image>

                    <br/>Ubuntu Server: Aprenda a instalar um servidor Apache para alojar sites<br/>

                    <br/>devem executar os passos seguintes:<br/>

                    <br/>sudo nano /etc/apache2/conf-available/servername.conf<br/>

                    <br/>e adicionar a seguinte linha:<br/>

                    <br/>ServerName localhost<br/>

                    <br/>Guardem as configurações e executem o seguinte comando<br/>

                    <br/>sudo a2enconf servername.conf<br/>

                    <br/> E está feita a instalação do Apache!<br/>
                    <br/> <strong>fonte: Pplware</strong>
                </p>
                <hr/>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
