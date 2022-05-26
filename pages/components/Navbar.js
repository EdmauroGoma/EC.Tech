import Image from "next/image";
import Link from "next/link"
import styled from "@emotion/styled"
import emblem from "../../public/images/emblem.png"
import Widget from "./widget";




export default function Navbar() {

  const NavContainer = styled.div`
  width: 100%;
  height: 20vh;
  background: #000;
  color: gray;
  align-items: center;
  justify-content: space-between;
  display: flex;

  `;

  const NavLogo = styled.div`

  `;

  const NavLinks = styled.div`
  display: flex;
  margin: 10px;
  > a {
    margin: 20px;
  }:hover{
    color: #fff;
  }
  @media (max-width: 470px) {
   display:none ;
  }
  `;


  return (
    <>
      <NavContainer>
        <NavLogo>
          <Image src={emblem}  width={100} height={100} alt="logo do site"/>
        </NavLogo>
        <NavLinks>

              <Link href="/HomePage"><a>Home</a></Link>


              <Link href="/servicos"><a>Serviços</a></Link>


              <Link href="/about"><a>Sobre Nós</a></Link>



        </NavLinks>
      <Widget/>

      </NavContainer>
    </>
  )
}
