import styles from "/styles/Navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
       <div className={styles.NavContainer}>
           <Link href="/">
               <Image src="/../public/images/logo.png" width={200} height={200} alt="Logo image"></Image>
           </Link>
           <div className={styles.NavItems}>
               <Link href="/servicos"><a>Serviços</a></Link>
           </div>
           <div className={styles.NavItems}>
               <Link href="/Empresa"><a>Quem somos</a></Link>
           </div>
           <div className={styles.NavItems}>
               <Link href="/Blog"><a>Blog</a></Link>
           </div>
       </div>
    </>
  )
}

