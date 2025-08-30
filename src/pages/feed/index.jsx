import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighLight } from "./styles";
import image from "../../assets/image.jpg";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />        
          <Card />        
          <Card />        
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo percentual={90} nome="Rafael Barros" image={image} />
          <UserInfo percentual={80} nome="Rafael Barros" image={image} />
          <UserInfo percentual={70} nome="Rafael Barros" image={image} />
          <UserInfo percentual={60} nome="Rafael Barros" image={image} />
          <UserInfo percentual={50} nome="Rafael Barros" image={image} />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
