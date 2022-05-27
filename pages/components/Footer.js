import Link from "next/link"
import styles from '../../styles/footer.module.css'
import logo from "../../public/images/logo.png"
import Image from "next/image"


export default function Footer() {
  return (
    <>

<div className={styles.footer}>
       <div className={styles.footerItems1}>
           <Image src={logo} alt="imagem de logo"/>
         <h2>Entre em Contacto conosco e <br/> faça o seu orçamento</h2>
         <div>
           <button><a href="https://wa.me/244953529112">Preços</a></button>
           <button><a href="https://wa.me/244953529112">Orçamento</a></button>
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
    </>
  )
}
