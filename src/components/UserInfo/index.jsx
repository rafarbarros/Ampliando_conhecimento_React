import React from 'react'
import { Container, NameText, Progress, UserPictures } from './styles';

const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
        <UserPictures src={image} />
        <div>
            <NameText> {nome} </NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}
export { UserInfo }
