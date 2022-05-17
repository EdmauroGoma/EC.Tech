import styled from "@emotion/styled"
import Image from "next/image"
import Footer from "./Footer";

export default function BoxArticle4() {

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
                <ArticleImage><Image src="
                data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgUFRYYGBgaGBoYGRgYGRgYGBgYGBkaGhgYGhgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhJCs2NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA+EAABAwIEBAQEBAUCBgMBAAABAAIRAwQFEiExBkFRYRMicYGRobHBBzLR8BRCUmLhcvEWI1OCkqIzNXMV/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACcRAAICAgICAQMFAQAAAAAAAAABAhEDIRIxBEFRIjJxBRQzYYET/9oADAMBAAIRAxEAPwC7NYjimnbaaM2kpuI3MZimjhidmki+Gl4mUhAMXcqX8NEc1LKNDqQQBR2L08zVJwobH7kMYT2XNmbUXRfErkimYniRplrAf5gPmr1gj8zAT0WL4peF9QmdjotO4MxHPTaDvCpi8dY8SdbfZs2blNr0i3UxqnsaJlT3T7kniRkJhPKSaJ3TTLsDOvSKWckSswIARwihHCJgwRgihHCKAzq6EVdCdChguooXKlRrRJMJgB11R5xOnyk9OU+iIcVbtAnpMwhyQaJNdUMccpgwY67gfVL0sYouOXOJ+nutyRuLJJBEpvDhIIPojpgAQQQWMBcQQWMNKm5XVypuV1RKEe1qUaEMq6U7ZzgKKhKBWGSOpF4SgKI5CRSIm5UPjq+ysIlXq4dDSVkPHd3mdllcs1yyKJ1Ynxg5EdwnYtr1YdrGsLQbeybbvGXQHksrwi/dReHt3VkueJ3VXsDeoXfKDf4OVM160fIBUjyUFgJJY0nop7kuZKm0UbEwndNNU6prR7FfR16RKXekSizIARgihGCxg4XQuBdCKAdC6uBQPE2M+C0MafO7f+1v6pgVYvivEFKjLZzP/pCrNxxJUdMCAdNd4+yivArVDmg68zzThuFP5z8I+qD5PoooxXYd2IPcSQYG3rpuU2cxp57cyl3YcR+pTSrTA1kfHokakFOIAx0yHn05FK0S5pkudG5AO+v+6aNxWmBH6IG9nUEfoltoakWbBsWIdBcT7Rp7c1bqF40gazosqtro5tDHcdZ67aq34PfPdoNvb47plJoSUUXEFBMLe4iOhKfSqxlaJNUdXEFwpgDWodSghU3KCmUG5KK4opcuNKejnSOrhKMUUo0OjgXCuhFKWQ6I7G6+Rjj2WGY7dF9Vx7rVuNr7JTInks54cwxtxWl2onVT8dKU3P40Xytxgo/JBU2HSeatWH4B5W1OYII9lMcQ8N0qdOQNeqgqXEmRmQnYQF125LRzUanw/idNzWtBExsrM0yFh3Cl1UfXDmHSdVtNo45RKhOPFjJ2LJzTTYJ1TU12M+jr0iUs9JFZgQAjBFCMFghgurgXUwBG8uRTY57tmglZrVvA95e+XEmY35/orVxzd5KGXWXEDTlz+yodJheQf5SNY0IToyLYzFGnykx0yjfoD05INLn6jP2nb25IYfRY1ghvLeDPxKc3NWGyHbDVZv5CkMX0+RzE/p6KKvKZghrZ+GqlKd4wtzE8tduhlMa1zTLcwd19eX79lOTKJFdq2z+bR8kiZbrqD+9FLVnU+bvp7pvUt6btA8A9CRzU7HojW3EPGx1G42HYK24biIDfzB0CSW76HR2g33nXoqfc2jmSk7LEYLmu0MHnv/b0E7+3dZCtGqYZiIeDrzncaD2VjsK+ZsdPpyWZYDeGBuSQDPrAg9SMp+KvOCuh56HT33TRdSJyWieQXCuKzJjepuUEKm5XVIcjfEC6HhRwelGvKrzE4D7OhmTQPKO163JB4joJGu+ASuB6j8YusjCeyllmlFlMcbkZzx1f5nFkqtYHi/8ADvJ67ruNXRfUce6jKdPM8N6ldPj4uOFX72Lmlynr1os+N8TvrtLWkxCrNG1LzC03BODqZohxGpElVW/tG2twY26FNGS2kTaY54Rd/C1gX/kOmvI9Vrdvi1N0NDh6LEcVxRryAPkrDwpSrvc17SS0RM9EJRtWwp0bAx0iU7pqKsHnKAd1K01ypbHfQZ6RKVekiswIAXQuLoWCGCMEUIwTAKD+IdyS9lIc/N8NJ+aisLuLakwl7wXc+noE8/FFhYWPBgkFs/DRZnWtnuBJfkb1JTXWwxTZdLrjFs5WaaxpPzTL/iN0FrjMzP8AhU6pa5W5mvLp5hj8p/7ogpCi9xdoZUZW92XjXwXC6xlwptaHbtj5bKBrYycsZv8AClauBuNsKpcZmO3+dlWHWhzECDAknkBzJ6JVTewu0tB/4qs/RuY/FGqMrMHm+evyS1vXyszNa58ETme5jT6MZqR6pnc3hcSAx7D2c9w+D9VTfonq9j+wxh7fI/VvcnRO30wQSNZULReTo9p7HKQfgpyyYYg7cv2UGFE9gdbOyT+YANbE7j/E79VeeH6xzM3OoGvpqVmlre+E7R0azqJbrv8AZStlxYaDvGLQWzLWkn5oCtG1IKtcF8WU8Qpvc1pY5jg1zTqPMJaQehg/BWRVuyTVCTkF0oJRiryjtck0ZqS2OLtKMCk2o4WtmFJVR4zvsrCJVpqvyglZbxriGZ2UFRdzyRgi2NcYuTIXBcP8d8HmU5x7Bhb5XjkQfgmvD2JeA8nkUvxJjXjw0bdV7ElLr0cN+yxYVxu1jMjiZjToqjxDiRrvzJXh/B/4h0SY7KS4h4VNFmcFTXGMg7aK3b4a9wzBaZ+HWJU2tNN8BwOncKlYfiDGU8pAkbplbXbjUlhIJOkI8eWmBOjehiFMvytIlTdE6LKMCs7oObVdqDv6dVqNhUloXPOKi9FLtDl6RKWekSpMyAEYIq6FghwuhFCMEwCj/iXb5mUidsx+iyl2cvc8U/EIcQwHVjI/mI2c7stZ/EC4aclIg6eeeRBkQqnR4edWEh5Y0bBmhHaEGykVopN6+s/WtXMzoJfoNdAxsNHopCwwzKP6nEhwJABA2iZ1n7K2W3AzGOD3S49XnMfhslK9k3xWsbvpMJJN0VhFWST7RrbdjNxB09f2VQLm1fTeSDA+OnMFahcWb6bQXkZG+Weh2gqk4vhtRxLmDM2eRUpOpfBRJOPyMLnDqjxmbUEHWHNn5iOqa0sBrHXxGAcy1sn2kqdwurSLBTeC1wB0IjU806rNYGwDr7FM5MVJEQLFlJursxP71TCvVAGkJ1eNMkzp6qEvHmFo7ezSpLRx9TM4Drom1ZwzinUJaBrtyKLSf5ge6GK1s4a4/maY9W/7p/Yno1D8E6eUXgG2enHpletRKzz8HaGW3quI8znt/wDEMEfUrQk66IT+4TKC65BAxX/CRm0U5ezzFKsYrvGibmNm0UYUE8DEYtgIOCApsrWP1cjCeyxfFbkvqOK0zj/EAxhaFnWDYYa746lJ4cF/0eR+tHVmm1jUfki2MzODequTeFW+DnM7SmmK4AbctfP5SCntbioeDlEExELtnJy+05F/ZE8PYl/C1SCdJ1Vi4n4kp1KZa2DI0KoBJe89SVaLLhKo+nnB9uSm0rtjJ+iovY5xgc0+s7epSc15GxBSlW0dQrAP2BUlit7TLIG6ZvYDXOH8RovoAgjbXtopLCr5jyWtMwVhuC3VeclMnXSOSvvC7K9CrLwYd8ipTx0ux0zTnJAo1N8tlEK5mMjq6EVGCxgwRgihdRMVH8Q2jJSPPO7X2UHgl5kbBOn6qb/EN0Mon+9w/wDUKkC71gekeiWUmpaLQScSz3+Kl5yMOpMT0GxJVRu+KKNBxoiQ4PIe8gySNJJ5BO7Wo99UEO0Gs99gPunl/wAMW1y/xHtcHGAXNMT6jYnbVZLk9mcuK0V7EuJKjm5S4x6yFWWcRVwSGTHWVYcS4KqB5ZReSwDZ+hHYHmEhbcOsboXA8tx8kOEY97C5yl1o7hV++sx/iSSBLXcw4Jajdu2MiFJtsWUmAAT39VG3b6Z0gh3KEnuvQ16sRrXU7n0UNcVsxISl6SW+mo9PZM6gIIKeMaFlKwUjqB3T60bTzedpOs7bjkCTs09Qo8HWe62bCeC7W8trOvUNRrhbsY4U3Boe0SQHaE6SdQQUasXlx2Sv4cWxbaeITPivc9o5NY0BjWjt5CfdWxJWtuymxtNjQ1jGhrWjZrQIACUKZKkSbt2FcuLqCxiOB1lHL01D0HPXRZBrY7a9J3dxlaT2SDXqH4jvclN2vJRzZOMWWw4+UkZtxpiHiVC2eabcL4k2g8l0QY9lE4hWzvc7um2pIC7PHxccKT9gzS5TddIuPFuPtqMyMg6bqP4Y4aNxLj7I1Lhh5pB5PKVL8JY0y3b4byBE6lZ6VRJ/kg+IcCNs8EFW7AuJqfgw6AQNlWuM8cFYwzad1XsOtn1HBrNzol42vqDdD/ie8bUqEt2+6hqFtUftJVhxDhmsxhdEwleGqtNjSHjzJnSjowfg2q2nXDaggde61u9r0vDkEbSCsTxW5b4ssKk8Puryq3I2XNA+ASShy2FOjYsEv21GSDKkys44MuKlJxpvBGsie60Rj5ErmnHiykXaDroRQuhIEOF0IgKMEQFV/EenNq143ZUafYgj7hZbVr5SX9AI9zr9IW08TWRrWtVg1cWZm/6m+YfRYfUfsDzEfp90JIeDJPB7vIxz37NmZ5mNu6Qu+L3OkebsG+UAdD1Ta4szVaKbHw0mTA09RMFSeD8KW7CS6o90iZhhGnIAyfnyTRWtB7dEPc8QksyND9dxJjsFHuv65AcGOjkQDHxV9q4XSjKKzg06gBjNJ0gGPqFH4tTpsAYXOfA8pcYP/iI5SlbfwOof2UwY1WYd3ehkj4HRdF74r2mIPb3nQ7p3csokwGjMdgOR6kyl7bDgzzaT3grKhHfzYyuWEN15+6bXB1j/ACfdLYjVBcAOSY1XyVgAa7VejeBv/r7X/wDBh+IlecAemp5dSei9P4HZ+BbUaJ3ZSYw+rWgH5yiuwSeh8UUrpXERDi4gggEgC5APXCiq9CCmZUfje+hpEq4XD8rSVk3F96Xvy91yTi8mZQ/06sTUMbkMMEwt9w+B6p3i+APoFrz1EhOuDsSZRcc3M7p7xhjlOo3K3U9V6v1J16OEdN4kpihGkxEd1S6Fu6vUIbzKXwjB6lcEjknuFMNrcjONEtJXRiSu+CqjaeadhMlRPDFUUa8PGn3Wj3vEdE0dwZGwWS39xme5w01MKUblaY5rOMYnQdRiRqFkV5VcXkska8lJ4fZXNVpiS0JAWTqdZjXggE7lPBKKYG7GQtag8zmlaf8Ah3WpFkOgO2g9k3vadDwNI2VItMQqU3ksMa6LVyVGTo1biS4p0y14IEEfNWLCroPYD2WMVq9zcCSCR11WgcDXxLAx35m6H2UcmOkPF7LuugogKMFzjhgjAooXQsYOFjfH2CG3rlzR/wAuoS9nRrv5mdoJkditjCY45hNO6ouo1NjqHDdjhs4Im6MMwuq5h30PLlqnGIXlRnmZMHUjoeyNeYXUtaxo1m6gy1w/K9vJzTzH0SzKTH6HY7Ht3/fNGhrIN/Elf/MlR1W8qvMnn8firPWwa33L3a9Ij0iJSf8A/LptgiexlYxD2FMt1IMpxXqGNT6AH590vcCm3YmRPTXb98lF3FxpHP2/Z90tBsY13GZSQR3N1QeITCEzwVbCpf2zXCW+M1xHXKcw+bQvSZXn/wDDKgXX9E/0lzz2DWO+8fFb7TqNcJaQR1CF7MwxXCgilYAEFxBAxCGFzRNPFKL4hXQ8iFUGM+IboMpn0WN31Yve53dX3ja+IaWqpYJgj68lJ4jUpvI/wi2f6YqBFNkmArHS4YqPph88pTDFMIfbvBO0yrjbcS0xQgxtELvnJ9o5UiP4VvWUGupvjMCZPuoHia9bUqks2Calj7iscmklL4pglWk3O4aJEknbAJ4XhdeqYZMbnVcxLCKlGC5phXXgC9pBoDvzFKce3VIs8pE9FO3yoatDrge5o+GAYzRqCoXj+tTkFhEzyVRtr2ow+QkHsnF9a3D253g9dZR4VK7DehrRva1QZNSAhTYWPGcc1ZeAbam4uL43iD2S3G9GmyC2PZFSp0LRfeGrOiaLfynSeXNI0qbWXJDIg9FmuF8T1qIyt1GyvfBT3V3eK7moyi1bZROy9M2COCjOZARAVzDhwjAogK6CsYOCjBEBRgUTFf46sm1LR7i0F1OHtdHmbBEweWix+pWLWz+/dbvidt4tKpS5vY5o9SNFgmINex5YRDmkggjQkGCCnStC3Q0qYiZ3/wBgmta8dOhPoJgpatdtbo6mAecCfkUyq345Nj0AH3S0PyA/Oev3RSOZSDrx3IH3P6JB9Rzt0aFchw+sAkw4u1PsEk1ivXA/A9S6LataWUN52fU7M6N/u+HUZ6MrZafwfwQta+8cIBBp0++vncO0gD2KuQuxQrOb/I52o6SJkfFSVuxlNjabGhjGNDWtGgDQqre187y7kTPsdvlCjJ0MXVrgRI1CBUBg9/k8rz5eR/p/wp2U0ZckBqgILiCYBU8yTrVcrSUJUTjtzlYVDyMnGNL2dODHykUnjC9D3FoKfcG4zTptDXQO6g61HOSSk6OEPfOSV1eI4RxqF7G8vxsifOtEzxdjDKphnxUNhmD1awJbsml/Y1KZh4PqrrwZiVNlLK6J5ldz1HR53siOH2fw1x/zB6eqsHGWLUnUsrdyNlWOJr5tSrLNhzTKnh1ao3NDiEHG9sAyt7io0+QkHspSrZ3T2Bzw7rtumuFNDKzWvEawZ5LYrc0DREEbbqcpU9DJGS8Ohvjhr9BOs8oWt3NvRNH+XbdZTjtRrK7iwiQeSPSx24c3w5JHZZpy2FOhveXzres7wzsT6Jrd3lSt5jJSVxSOcZxuVqGD8NUvAEgTCLqIEZdQYXEN5kwtt4MtPDpNHZZvSwcC8yNGgMwtcwunkYB2U80rVFIRtkwTISUpN9aBKSoVw4rkvZZwdWOgV0FEBRgiIKAoF6IiuKKEcvgMyrL2jv8AYqh/iVww6Td0my0//K0btP8A1PTr8VdWPAq0xO7nD/1cphzQRB1B015p49C2eYK9KQeccxv7hRrmBa7x3wE4TXs2y3d9Fv5h/dT6j+34dFlj2H/B3HYrPRSOyPe1KWdnUqvFOmxz3nZrRJ9ew7lT3DvC1xeO8nkpgw6q4eUHmGj+Z3blzK1vh/h2haMy0m6n87zq956uPTsNAlszRWOFPw8psy1LqHvGopjVjT/d/Wfl67rSKTYEBFpU0sSAlYSMxm5LWZR+Z2noOZ+g91Bx9fundzVzvc4nQbDTZpJJ+LEG0u22nvuVKW2ZHaQUvZXRaIOrfoo5lMfL4/77Jw1ukdt/36T6BBa6CyY8Zv8AUPiuqKaAgn5sWiPNNUriyvrlV1uKsNKzniCtmeufyWnNRXo9P9OxtvkyPt2clf8AhbCwGyRuqZg1HPUaFrGF0Q1gHZWwR3yOj9TzcYqCIjHuH6dRh8o2WRYtYuovLWkwtzxa4DGH0WS4mfFee5gLqefg0jzfH8R5k38FYY7UFa1w94AoAabak9Y1VVbwg57Mw3hQ12bq2lpJyrrclOOjhnBwk0wvFFRnjksI33CStcVuIyNJIPJRdR5cZKv34fWtJ+ronbXdLJJLYqKZc06gdLxqVfeBrCk9uYxJ013TrjbDqTactA0VDw3GalAyzktfKOg9MuHG+F0mND2gCDMqDseMKjGFkH16KPxfGalwPNMfJQlszM8N6mForVSM+zSODKbqtQ1nbnqtPYwQqtwlh+Sm2ByVtYyAubI7ZWL4oj8RccsNBJ6BNsEtKzRLxl10EyYU4GhdhScbdlf3DUXFLsKGo0riJVBIMGDyO6Y52xRERaReWjOADzgyPVdRAQ93Vcby0Y3m97nf6W0n/ctVvVRw2nnxDN/07d3xqVAPowqz3Nw1jHPcYa0En2TLoxE8RY9TtWtkF9R5hjGguPQvdGzBIk9wFWMQpYS57Kt1QY6pUIDnta9remZzA8/SVEUalzWuqlarMPJDQADkptGjARsOvUnvIQxq7a05y8AA5Q0FzmRlgu8g8pkjQk+qjLM06o7sfjKUU2zT6dhTDGtpta1gENa0ANDeUAaQkv4Qgqnfh7xWHPNlUgQP+SczTJAl1LQ7xLh2noFormqqqSs5ZJwk4jFtKExxMlrCBudPipgsUJiz5cG/0/U8uk9tZ1EbJJKgWRRZA7xAnUGQRv7H4HQkaqwNzv09Scx002HzRA/nt76RpJnly110yk6gtR2nl8R0A7e0Ry1GkNBm0GxVjf300+zfmUcH9P8AH0HsU2fVDdXFo6yY1MHn3I9mqLueKrOnoarSf6WFrzsYkNPoP+4oUaybzf3R6/Xfnv7oKrf8b0TtSee+gn2hBCgi+PXGVhVAe7OSSuILkjvI7PovAS4Fq4NsZdmK0VjYCCC9HF9qPJ8+TeZ2VXjG6ysICpmE2+eoAuoKOX+RHoeHrxZSRqNhbBrAOygeLsMY5hMDZdQXVbS0eLXLJsx67tMpMJTDcUqUDLUEFWEm1sOfHGL0PMU4gqVxDufwTPD6Ie9rTzKCCrHo5jULPhKgaI8o217qkswYNuwxu2b7riCmm9hNtw2gKbGs5hoJ9U+QQXOE4gUEFjHIXEEFkA45JuMAnpJ+S6gsYjuGBNzcu/tpNHsHH7pzxIDUAotMbOd36BBBH0Muyr4zbig7zkSyiXOiTDXuytERDgS3UfaZoOLVvEdlbIBG0BrSRr5QHHJ8wgguef3npYf4yy8DcJte5lZziCyHUzMlv8zTPX6bLWqLyRruND6oILoh0efk7DPMAlVW8cS4zzJ5yO47cto5HUiCEEJiIbNP0B+IJBHtJj/UPKCAg4x8uvUNGo7wJ/0kZYKCCkMI4hh1Ouw0qrM4JMa5XBwBJgjQHftuPMCoWx4ItWkHWoJbGZxAgmZgAciPhsEEEQIsVlgtuGNHhU/h39F1BBIOf//Z" width={600} height={300} alt="Eua image"></Image></ArticleImage>
                <ArticleText>
                    <h1>Empresas americanas interessadas em investir tecnologicamente em Angola</h1>
                <p>
                Mais de 16 empresas americanas manifestaram interesse em investir em Angola com objectivo de criar empregos e transferência de tecnologia, e onde os contratos estão a ser negociados com as autoridades angolanas, segundo o embaixador dos Estados Unidos da América em Angola.<br/>
                <br/>
                Pelo que foi revelado por Tulinabo Mushingi, caso o Executivo Nacional efective um contrato com uma das empresas norte-americanas, a mesma trará tecnologia e vai formar os angolanos, bem como garantir empregos locais, mas “é preciso que haja transparência nos contratos celebrados”, disse.
                Ainda nesse mesmo encontro esteve o Ministro do Interior, Eugénio Laborinho, que informou que os acordos rubricados são para serem cumpridos na íntegra e permitir que se faça o que está estabelecido.
                </p>
                <hr/>
                </ArticleText>
            </ArticleItems>
        </ArticleContainer>
        <Footer />
    </>
  )
}
