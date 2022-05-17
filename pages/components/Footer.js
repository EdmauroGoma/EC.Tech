import Link from "next/link"
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <>

<div className={styles.footer}>
       <div className={styles.footerItems1}>
         <h2>Entre em Contacto conosco e <br/> faça o seu orçamento</h2>
         <div>
           <button>Preços</button>
           <button><a href="https://wa.me/244948854213">Orçamento</a></button>
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
