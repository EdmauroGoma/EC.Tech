import styled from "@emotion/styled";
import Link from "next/link";
import { AiOutlineEnter } from "react-icons/ai";
import Footer from "./components/Footer";

export default function Menu() {
    
  const MenuContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 50vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: #fff;
  background: #2c73c5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #26D0CE, #1A2980); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `;

  const MenuItems = styled.div`
  margin-top: 30px;
  padding: 30px;
  `;

  const Menu = styled.div`
  display: flex;
  flex-direction:column;
  margin-top: 40px;
  border: 1px solid white;
  border-radius: 5px;
  `;
  
    return (
    <>
    <MenuContainer>
           <Link href="/" >
                EC.tech
           </Link>
           <MenuItems>
               <div>
                 <Link href="/servicos"><a>Serviços</a></Link>
               </div>
               <div>
                 <Link href="/Empresa"><a>Quem somos</a></Link>
               </div>
               <div>
                 <Link href="/Blog"><a>Blog</a></Link>  
               </div>
           </MenuItems>
               <Menu>
                 <Link href="/"><a><AiOutlineEnter/></a></Link>
               </Menu>
       </MenuContainer>
       <Footer />
    </>
  )
}
