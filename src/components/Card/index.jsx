import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from "./styles";
import background from "../../assets/background.jpg";
import image from "../../assets/image.jpg";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={background}/>
        <Content>
            <UserInfo>
                <UserPicture src={image}/>
                <div>
                    <h4>Rafael Barros</h4>
                    <p>Há 10 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                    <h4>Projeto curso HTML e CSS com React</h4>
                    <p>Projeto feito com o curso de HTML e CSS no Bootcamp Global Avanade...<strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
