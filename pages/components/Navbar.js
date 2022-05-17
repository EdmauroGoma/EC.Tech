import styles from "/styles/Navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { BsJustify } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
       <div className={styles.NavContainer}>
           <Link href="/" >
               <div className={styles.logo}>
                EC.tech
                </div>
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
           <div className={styles.NavMenu}>
               <Link href="/Menu"><a><BsJustify/></a></Link>
           </div>
       </div>
    </>
  )
}

