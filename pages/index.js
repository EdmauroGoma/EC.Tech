import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {


  return (
   <>
   <Navbar />
   <div className={styles.HomeContainer}>
     
     <div className={styles.Header}>
       <h4>Empoderamos o crescimento da sua Empresa na Internet</h4>
        <p>Somos uma Startup Angolana que tem como objectivo <br/> prover serviços tecnologicos para Empresas e Pessoas Singulares que possuem ideias
          <br/> inovadoras, trabalhamos com o Feedback ponto a ponto com o cliente, <br/> prestando assim o melhor serviço possivel aos nossos clientes.
        </p>
     </div>

     <div className={styles.section}>

       <div className={styles.secItems1}>
       <Image src="/../public/images/networking.png" width={300} height={170} alt="Redes Computadores image"></Image>
         <h4>Redes de Computadores</h4>
       </div>

       <div className={styles.secItems2}>
       <Image src="/../public/images/seguranca.png" width={300} height={160} alt="Segurança Electrônica image"></Image>
         <h4>    Segurança Electrônica     </h4>
       </div>

       <div className={styles.secItems3}>
       <Image src="/../public/images/programming.png" width={300} height={160} alt="Programming image"></Image>
         <h4>Desenvolvimento de <br/>Sistemas Web e Mobile</h4>
       </div>

       <div className={styles.secItems4}>
       <Image src="/../public/images/startup.png" width={300} height={140} alt="Marketing image"></Image>
        <h4>Marketing Digital e <br/> Consultadoria de Projetos</h4> 
       </div>
     </div>

     <div className={styles.article}>
        <h2>Feedback instantaneo <br/> com os Clientes</h2>
        <Image src="/../public/images/feedback.png" height={400} width={400} alt="feedBack image"></Image>
     </div>

     <div className={styles.footer}>
       <div className={styles.footerItems1}>
         <h2>Entre em Contacto conosco e <br/> faça o seu orçamento</h2>
         <div>
           <button>Preços</button>
           <button>Orçamento</button>
         </div>
       </div>

       <div className={styles.footerItems2}>
        <div>
          <ul>
            <h4>Plataforma</h4>
            <li>
              <Link href="/"><a>Como trabalhamos</a></Link>
            </li>
            <li>
              <Link href="/"><a>Produtos</a></Link>
            </li>
            <li>
              <Link href="/"><a>Preços</a></Link>
            </li>
            <li>
              <Link href="/"><a>Ajuda</a></Link>
            </li>
          </ul>
          <hr/>
        </div>

        <div>
        <ul>
            <h4>A Empresa</h4>
            <li>
              <Link href="/"><a>Trabalhe conosco</a></Link>
            </li>
            <li>
              <Link href="/Blog"><a>Blog</a></Link>
            </li>
            <li>
              <Link href="/Empresa"><a>Equipe</a></Link>
            </li>
            <li>
              <Link href="/"><a>Contatos</a></Link>
            </li>
          </ul>
          <hr/>
        </div>

        <div>
        <ul>
            <h4>Social</h4>
            <li>
              <Link href="https://github.com/EdmauroGoma"><a>GitHub</a></Link>
            </li>
            <li>
              <Link href="/"><a>Instagram</a></Link>
            </li>
            <li>
              <Link href="/"><a>Facebook</a></Link>
            </li>
            <li>
              <Link href="/"><a>Email</a></Link>
            </li>
          </ul>
          <hr/>
        </div>
       </div>
       <div className={styles.copy}>
         <p> &copy;EC.Tech Angola todos os direitos reservados 2022</p>
       </div>
     </div>
   </div>
   </>
  )
}
