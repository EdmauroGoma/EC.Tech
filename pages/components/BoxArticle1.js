import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle1() {

  const ArticleContainer = styled.div`
  width: 60%;
  max-height: max-content;
  box-sizing: content-box;
  margin-left: 30px;
  margin-bottom: 30px;
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
                <ArticleImage>
                <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISERIRERESERERGBERERESEhERERERGBMZGhgTGBgbIS0kGx0qIRgYJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QGhISGjMhIyozMzMzMzMzMzMzMzEzMzMzMzEzMzMzMzMzMzMzMTMzMzMzMzMzMzMzMTMzMzMzMzMzMf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQUGBwIEA//EAEcQAAIBAgEHCAcFBAkFAQAAAAECAAMRBAUGITFBUWESExQicYGRoRYyQlJUYtEjkqKxwXKy0vAHMzRjgqPC4fEkQ1ODw3P/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQQFAwL/xAAtEQACAgEDAQUHBQAAAAAAAAAAAQIDEQQSMSETIkFhgTJCUVJxsfAUI5HB0f/aAAwDAQACEQMRAD8AsUcIT0QOKEcAIRRyQOMRRiAEI5HZTy1Qw+h3u/8A4061TvGpe+0RTbwlkN45JCEpWKzzqE/ZUqaDe5ao3gLAec8RzpxZP9Yo4CmlvMSytJY/I59tE0OOUCjnbil9bm6g28pCD4qRJnA54UnIWsjUj7w66d9hceEiWlsXXGfoFbFlmhOKVVXUOjK6NpDKQynsIncrnQIQtHAFHFHACE8WOypRof1jgNrCL1nPcNXadEgsRnd/46Oje76fuj6zpCmc+sUc5Wwjyy1QlOXO6ttp0iOHLB8bz3YXO2m1hVpsnzKecXv1HyM6PS2rwPK1Fb8SxQnzw2JSovLpurrvU3sdx3HgZ9JXOwQhCAEIQgBFHCAE5nUIAoRQgHEICEgBCOEkCnUIpAHHASl525d5RbDUm6g0VXHtttpg7ht36u3pVW7JYR5lJRWWfTL2dBN6WFaw1NWGs8E4fN4b5Uybkk6SdJJ0kneZxOpr11RgsRKspNvLHARQBnQ8nUIQkg9mTMp1cM3KptoJu1M6UftG/iNM0DI2WKeKS6dV1/rKZPWXiN68Zmc+uFxL03WpTYq66QR+R3jhK92njYs8M9wscTWRHIvIWWExVO4stRbCom4+8N6n/aSkyZJxbT5LaeVlCIlXy5nHySaeHILDQ9XWBwTeeMWc+W7crD0m4VXHnTB/M92+VSXtNpk1vn6IqX3+7EbMSSzEljpJJuSd5O2EQ06BpJ0ADWTJnCZt4moLlVpg6ucYg/dAJHfaXZTjBZk8FSMXJ9FkhxAyeq5p4gC6vTfgGZT5i3nIbE4WpSbkVEZW3MNfEHUe6RC2E/ZeSZQlHlBhcVUpPy6blGG0aiNxGojtl1yJl1MRZHslYez7L8V+n5yiRqxBDAkEEEEGxBG0GebaI2Lrz8SarXB9ODUoSIzfyx0hOQ9hWQDlbOWurlj9f95MTInBwe1mlGSksoUI4p5PQQhCAEIQgBCEIB8o4hHIAQhCAOKEGYAEk2ABJJ1ADSSZIITOjK/R6XIQ2q1bhDtRPaft2Dj2TPZ7Mr484iu9U6ieTTHuoPVH69pM8U19PV2cfPxKk5bmdTqlTZ2VEUs7GyqouSd04vNCzXyKKFMVHX7Zxt100PsDjv8ADZJuuVcciMdzPLknNKmoD4nrtr5tSQi8CRpY+XbLDTwFFRyVo01G4U0H6T0xCZU7ZTeWyyopcEXjMgYWoNNJUPvUxzbA79Gg94Mp+W836mG66nnKPvgWZODj9dXZNFiZQQQQCDoIIuCNxE91aicHzlESrUjIoSezmyF0ducpi9Bzq182x9k/Kdh7t14Ca0LFOO5FSUWnhnpyfjXoVFq0z1l1jYy7VPAy55UzkTo6NQb7SqDo9qkNTX+a+geMok6ptY8J4sojOSk/AnfJRaR6J1Sps7KiKWdjZVGsmcEy7ZsZI5pOecfaOOqDrSmdnadvhvk3WquOXycKq3N4PRkTIaYcBns9Y621hPlT67ZLwhMeU3J5kacYqKwhz44rCpVQpUUOp2HWDvB2HiJ9YTznxJM+y3kdsM+1qb+o+0H3W4/nIyadi8MlVGp1BdXFjvB2MOI1zN8dhHo1Hpv6yG19jDYw4ETV01/aLEuUZ99Wx5XH2DCYl6TrUQ2ZDcbiNqngRomjYHFLWppUT1XF7bVO1TxBuJmUsWaOUOQ5oMerU6ycHA1d4HkJGrq3R3LlfYnT2bZbfiXKEITLL4QhCAEIRwAhFCQD5RxRwAhCOAEr2eWO5vD82p69clf/AFjS/jcDvMsQmeZ2YrnMU6g9WkBTG640sfEkd0saaG6xeXU52yxEhIWnURmuVSezQyZztbnHF0o2bTqap7I7tfhvmgSNzfwPMYZEIs7DnKn7babdwsO6SkxtRZvm2W644RzOoQnE9hCEIB869JaiMjqGRwVZTqIMzXLeTGw1UoblD1qb+8nHiNR/3mnStZ6VafNJSIBqk8tDtRRoJ79X/EtaSclPauH+ZOVqW3LKNCBEJrFRk3mphUq4hVciyAuEP/cIIsvYNfd2zRJkmGrvTqJUQ2dCGU8Rv4bO+ahk3GrXpJVXU40rtVhoZT2GZuti8qXhwWKGsNHqhC0JRLAQhaEkDlbzvwHKprWUdanZXttQnR4E+ZljnFakroyMLq4KsOBFjPdc3CSkjzOO6LRls6p1CrK6mzKQyncwNwZ1iaJpu6N6yMyHjY2vPnNvozK4NOweIFWnTqLqdQ1txOsdxuO6faVzM3E8qk9I66bBl/Ya+jxB8ZY5iWw2TcTUrluimOKEJ4PY4QhACEUJAPnCEIA44o4BxUcIrO3qoGY9gFzMoqOXZnb1nLO3axufzmjZzVuRhKx2sBT++wU+RMzi00dDHpKRWvfVIJ78h4XncTSpkXXlcp/2E6xB7bW754bSz5jUL1atT3EVB2u1z+55y1dLbXJnKtZkkXSdTmOYheHCKOAEI4oB8sViFpI9RzZEFzvO4DiTo75nGNxT1qj1H9Zzq2KuxRwAk1nZlPl1OYQ9SmbuR7VTd2L+ZO6V6aukp2x3Pl/YoaizL2rwPjXTb4z5SUwGDavUSkvtmxPurrZu4TzZUwLYes9JtPJPVb30Pqt3jzvLLkt23PU8Qy45PJaWLM7KfNVeZc9SsQBfUtTUp79X3ZXov50SLIKcXFnqMtryjYISLzeyl0mgrk9dOpUHzAet3jT47pKTDlFxbTNBPKyKOEJAEYozC0kFGzvw3IxPLA0VVVv8S9U+QXxkHLhnrRvTpVNquydzLf8A0SnzY0ss1r+DNvjibJnNOvyMUq7KiunfblD93zl7mZ4Crzdak/u1EJ7OUL+V5phEp62OJp/FFnSvMWhQjjlIsihHCAKEcIB8b6uP0jInJ2fzsnRgCjvFHAK9npUth0X36i37AjH87Sky3Z8N1aC72qnwCj9ZUwJraRftL1Kdz74rS65lU7UHfa7nwVVA8yZS5oGaqWwifMap/wAxh+kjWPFfqKOsyWnUUcyy4OEISALTuHjI3L2U+j0iRbnHulMX1G2l+wfnaSTuACSQAASSdAAGszO8s5ROIqs+nkDq0wdiDb2nX/xLOmp7SXXhfmDjfZsj5ng7fG9zedRT3ZHwBxFZU9j1qh3INfedA75rSkkm2ZqTbwizZpZO5tDWYderoThT39509gEM8Mmc7S51B16IJNtbU9bDu1+O+WBVAAAFgLAAagBqEcxndLtO08fzoaqrShtMgiktnHk3o1cqotTe9SnuC30p3HyIkVNiMlJJopNYeGSubmUuj1wzG1N7JU3AX0P3HyJmlTIBL9mhlPnaXMubvRAAvran7J7tXhvlLWVe+vU70T90sMI4TOLIoRxSQRGdNPlYSp8ppt4OAfImUCaRlpb4WuP7tz4C/wCkzeaehfca8yjql3k/ITapqVCpykR/eVW8QDMvmj5Ha+GoH+7p+SgTxrl0i/qTpH1Z7YQhM4uhCEIAWhCEA+JjhCAKOEIBVM99eH/93/zlVlwz1p9Si25nX7yg/wCmVGa+kf7S9Sjf0mwmhZuf2Sj2N++0z2XzNWpysKg2o1RD94sPJhPGtX7a+v8ApOnfeZNQinUyy6EITw5WyiuHpGodLerTX3n2Ds2mSk5PCIbSWWQ2d2U7DoyHS1mqkbF1hO/WeFt8qc6qVGdmdyWZiWYnWSdc5E2qqlXHaZdk3OWQMvmbOTuZo8phapVs7b1X2V8DftMrWbmTufrAsL06dnfcx9lO8jwBl+lTW28QXr/hZ0tfvv0/sIQhM8uEVnFkzpNBlUfaJ16f7QGle8aPDdM0/nToM2CULPDJnNVeeQWSsSTbUtTWw79f3pe0VuHsfocLo+8V0T1ZNxrUKq1U1odIvoZT6yntH6TyiMa5pNJrDKq6Gs4bELUprUQ3RwGU8Ds7Z9pSszcqchzhqh6lQ3pk6lfavf8AmOMusxLq3XLaX4T3LIrwhHOR6PLlMf8AT1v/AM6v7hmZCaTlp+Tha5/u3HewsPzmb2mlofZl9Slq+UE0bIf9lofsD8pnM0jJCcnDUBupp+6JOufdj9f6I0ntM9kIQmYXghCEAIRxSST5QhHIIFCOEAhc6qHLwrEC5psj91+SfJjKLNRr0hURqbeq6sjdhFjMyxFBqbuj+shKntG3s2zS0Uu64lPUx6pnzlkzPxwSo9FjYVLMl/fA0jvH7srcYNtIJBGkEaCDvlqyCnFxZXhNxeUatCU7AZ1uqhaycu2jnFIVz2g6CeOieurndTt1KLlvnZVHleZb0tqeMF9XwxyWHE4hKaM9RgqLpJP5DeeEz/K+UWxNQu2hFuqJ7q/U7f8AacZSynVxDA1GHJHqouhF422niZ4hL2n03Z958lS67f0XA51TQswVQWZiFUDWSdQnMtuaWSrDpLjSRakDsU66nfqHC++drrFXHczlXW5ywTWSMnjD0lQWLetUb3nOvu2DsnuhCYkpOTbZqJJLCHCEJBITy5RwS16T0n1ONB2qw9Vh2GeqKSnh5QMnxGGem703FnQlWHHeOB198+ZEvGd2SOcTpFMXemLVANb0xt7V/K+4SkCbNNqsjn+SjZDa8DU7dRG0aCDvE0PN3LAxCclz9sg641csbKg/Xce0TPVn1w9d6brUpsUddKsNYi+lWRx4+BELNjNVjlWwOdyEAV0ZW2tTsynjYm4859sVndRA+zp1HbZygFXv0k+UzP01ucbS120MZydZ44sJRWkD1qpBI3Ipvfxt4GUqfXGYt6ztUc3Zu4AbFA2AT5TUoq7OGCjbZvlkaoWIUa2IUdpNhNRRQqhRqUBR2AWlCzcwvOYpNHVT7Rv8Or8XJmgSlrZd5RLGkj0bFCEUolscIo4AQhCAfOEIQAhHaKAErGduSyf+ppi5UAVQPdGp+7UeFt0tELX0HSDoO4idK7HCW5HmcFNYZlYilmy1myykvhhyk1ml7S/sbxw19srRFiQbgjQQdBB3ETYrsjYsxZmzg4PDHCKdTojwEUcncjZuvVIesClLXyT1alTsHsjj4b55nZGCzJkwg5PCPnm7kY135xxaih0/3jD2Bw3nu7L2u4aANnCcU6aooRAFVRZVGgAbp3Me652Sy+PA0qq1BYHCK8d5xOgRxXheAOEUIA5RM5sicyxrUx9i56yj/tudn7J2btW6Xuc1EVlKsAysCGUi4IOsETrTa65ZR5nBSWDJxHLDlvNl6ZNSgC9PWU1vT/Vh5/nK9NiuyM1mJQnBxeGMQhCdDmxiO8Q3fyZas3s3WutbELYCzJTOsnYzjYOHjx52WxgssmEHN4RJZrZONKkXcWerZiDrVB6o7dJPfwk1HFMWc3OTkzTjFRSSCEITySEIQkAIQhAPmY4HZ2zqAcwjjgBCOK0AJ5MXk6jV/rKaOfeIs4/xDTPXaFpKbTyg1kgamauGOo1E4K4I/EDI/K2RsJhKD4iq1dlSwCBkBdibKo6u2W60oP8AStiXWjQpBfs6js5fTcMi2C9hD37p0/UWfMzn2MPlILJ2dNRX5VHC4dQPVVxUqPb9str7AJombmXkxlNmCGnUQhaiE8qxN7Mp2g2PgZieDxJQ7Zf/AOjbFXr16YQnlojs99CchrBSLazyzpv7M4ucpPMnk6qKS6LBokcISSAtC0cIAoWjhAFaFo44AoRwgCngx2RsPWN6lMco+2t0fvI1995IQkqTi8p4DSfJWnzPon1atVeB5DfoI6eZ9EHrVKrcByF/Qyxxzt+ot+ZnPsYfA8GByRQoG9OmA3vtd37idXdPfC0JybbeWz2klwEU6nM8kihOopICEISAEIQgHzOztnVpADPHJx0dLT7lQf6Z9PS3J3xdP8f0gE3HIQZ2ZP8Ai6X4vpD0tyf8ZS/H9IBNiO0gxnbk74un+P6R+luTvi6f4/pAJy0VpC+l+TvjKfg/8MPS/J3xlPwf+GATVpXs+cHSq4GqKhCslnota556/VUftaV7CTskJnB/SIlNimDRaxsL1n5QpgnYq6C3bcSi5Xy/isXoxFVmUHlCmAEpqd4UaCeJuYB1hsjEetVw4J1AuCfqPOaxmhkynQwlNkVeXVAas6ljymBI27BqAsJiSi0msiZxYnBkc1UPIBJNF+tSa+vR7J4ixjBOTb45Vsl584OqnKqv0ZxblI9yL70YDrDwPCe70tyd8XT/AB/SCCahIU525O+Lpfj+kXpdk74un+P6QCchIT0tyd8XS/H9IvS/J3xlPwqfwwCchIT0vyd8XT8H/hh6XZO+Lp/5n8MAnISD9L8nfGU/B/4Yel+TvjKfg/8ADAJyEg/S/J3xdP8AzPpH6XZO+Mpfj+kAmo5C+luTvi6Xi30gM7cnfF0vxfSATUJCeluT/jKXi30j9LMnfGUvFvpAJqKQwztyfe3TKXi1vG0fpXk/4yj94/SATMREh/SvJ/xlH7x+kDnXk+39ro/eP0gExCQnpbk74ul+P6RjOzJ/xlLxb6QCahIX0ryf8ZS8W+kIBiPRhvPlDo43nyhCMEh0Ybz5Q6OOPlCEYAdHHHyh0ccfKEIwB9GHHynL0Qovp1jdFCMA5Y6TwJ/WNYQkIDMamKEkHSnWP5tGuGBF7nyhCAHRl3nyh0YcfKOEYAdFX5vER9FX5vwwhGALow4+UOjL83lCEYAdEG8+UfRV3t5QhGALog4+InXQx83isIRgCOEXe3lAYVd58vpCEYB10MfN4iLoa728oQjAOuhD5vFYDBDe3lCEggRwI+bxWHQR83iscJOCRdCHHxEYwA+bxWEIwDroA+bxWEIRgg//2Q==" width={600} height={300} alt="Post1 image"></Image>
                </ArticleImage>
                <ArticleText>
                    <h1>Meta abre acesso a modelo de linguagem de inteligência artificial</h1>
                <p>
                    Na última terça-feira (3), a Meta, dona do Facebook, revelou que está abrindo acesso a um modelo de linguagem para aumentar a pesquisa na área de inteligência artificial. A companhia acredita que a possibilidade melhorará as habilidades dos pesquisadores e o entendimento sobre grandes modelos de linguagem.
                    Os grandes modelos de linguagem são sistemas de processamento de linguagem natural que usam grandes volumes de informação para gerar respostas ou outras informações. A Meta acredita que as restrições ao uso dessas categorias de modelo impedem o progresso da área.
                    O modelo Open Pretrained Transformer (OPT-175B) é o primeiro com 175 bilhões de parâmetros a ser disponibilizado para a comunidade de pesquisa de inteligência artificial — a versão disponível contará com modelos pré-treinados e o código para treiná-los. Segundo a Meta, o estudo da área é extremamente importante para o desenvolvimento de diversas tecnologias e serviços.<br/>
                    <br/>Comunidade de Inteligência Artificial
                    “Acreditamos que toda a comunidade de IA deve trabalhar em conjunto para desenvolver diretrizes claras sobre IA responsável e, em particular, sobre grandes modelos de linguagem responsáveis, dada sua centralidade em muitos aplicativos de linguagem downstream”, foi revelado em comunicado oficial.
                    O que o urso polar tem a ver com inteligência artificial?
                    De acordo com a companhia responsável pelo Facebook, o acesso ao grande modelo de linguagem estará disponível aos pesquisadores acadêmicos, organizações acadêmicas, pessoas filiadas ao governo, sociedade civil e laboratórios de pesquisa da indústria.
                    A inteligência artificial pode contrair o viés e toxicidade dos seres humanos e, por isso, alguns estudiosos acreditam que a popularidade dos grandes modelos de linguagem pode piorar a situação e perpetuar preconceitos sociais, de raça ou de gênero.
                </p>
                <hr/>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
