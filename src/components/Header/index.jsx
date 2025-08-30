import React from 'react';
import logo from '../../assets/logodio.png';
import { Button } from '../Button';
import image from "../../assets/image.jpg";
import {
    Input, 
    Wrapper, 
    Row, 
    BuscarInputContainer, 
    Menu, 
    MenuRight, 
    Container,
    UserPicture,
} from "./styles"

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="logo da dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src={image} />
                ) : (
                    <>
                        <MenuRight href="#"> Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>        
    </Wrapper>
  )
}

export { Header };