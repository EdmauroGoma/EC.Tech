import styled from "@emotion/styled";
import { List } from "phosphor-react"
import { useState } from "react"
import Link from 'next/link'


function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
    }

    const WidgetContainer = styled.div`
    padding: 12px;
    position: relative;
    display: none;
    @media (max-width: 470px){
      display: block;
    }
    `;

    const WidgetButton = styled.button`
    display: flex;
    padding: 12px;
    background-color: #000;
    border: 1px solid #3880D0;
    border-radius: 5px;
    color: gray;
    position: relative;
    :hover {
      border: 1px solid #fff;
    }
    `;

    const WidgetItem = styled.div`
    `;

    const WidgetIcon = styled.div`
    `;

    const WidgetList = styled.div`
    display: flex;
    transition: .6s all;
    > a {
      padding:5px;
      margin-bottom:10px;
      margin-right: 4rem;
    }
    :hover{
      border-bottom: 1px solid #3880D0;
      transition: 5s all ease;
    }
    `;
  return (
    <WidgetContainer >
        {isWidgetOpen && <WidgetList>
        <Link href="/HomePage"><a >Home</a></Link>
        <Link href="/servicos"><a >Serviços</a></Link>
        <Link href="/about"><a>Sobre Nós</a></Link>
        </WidgetList> }
        <WidgetButton onClick={toggleWidgetVisibility} >
            <List size={24}/>

            <WidgetItem>
                <WidgetIcon>

                </WidgetIcon>
            </WidgetItem>
        </WidgetButton>
    </WidgetContainer>
  )
}

export default Widget
