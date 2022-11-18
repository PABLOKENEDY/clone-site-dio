import React from 'react'
import { Card } from '../../components/card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './style';

const Feed = () => {
  return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed | Artigos</Title>
                    <Card />
                    <Card />

                </Column>
                <Column flex={1}>
                  <TitleHighlight> #  TOP 3 DE USUÁRIOS DA SEMANA </TitleHighlight>
                    <UserInfo nome="Pablo Henrique" image="https://media-exp1.licdn.com/dms/image/C4D03AQGThKEaGPhJxQ/profile-displayphoto-shrink_200_200/0/1642428236472?e=1673481600&v=beta&t=-0Lx6IhyiJYgGdm5inDMONESJj413aT-gEkXOerRpNU" percentual={25}/>
                    <UserInfo nome="Pablo Kenedy" image="https://media-exp1.licdn.com/dms/image/C4D03AQGThKEaGPhJxQ/profile-displayphoto-shrink_200_200/0/1642428236472?e=1673481600&v=beta&t=-0Lx6IhyiJYgGdm5inDMONESJj413aT-gEkXOerRpNU" percentual={65}/>
                    <UserInfo nome="Pablo Luzia" image="https://media-exp1.licdn.com/dms/image/C4D03AQGThKEaGPhJxQ/profile-displayphoto-shrink_200_200/0/1642428236472?e=1673481600&v=beta&t=-0Lx6IhyiJYgGdm5inDMONESJj413aT-gEkXOerRpNU" percentual={85}/>
                    <UserInfo nome="Pablo Jesus" image="https://media-exp1.licdn.com/dms/image/C4D03AQGThKEaGPhJxQ/profile-displayphoto-shrink_200_200/0/1642428236472?e=1673481600&v=beta&t=-0Lx6IhyiJYgGdm5inDMONESJj413aT-gEkXOerRpNU" percentual={35}/>
             </Column>
            </Container>
        </>
      )
    }
    
    export { Feed }; 