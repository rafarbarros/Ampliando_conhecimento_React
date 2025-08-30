import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {Container, Title, TitleHighLight, TextContent } from "./styles";
import bannerImage from "../../assets/banner.png";


const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title> 
            <TitleHighLight>
            Implemente
            <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
            e encare seu novo desafio profissional, evoluindo em comunidades com os 
            melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
