import React from 'react'
import {Button} from '../Button';
import logo from '../img/ampi_logo.png';
import {useNavigate} from 'react-router-dom';


import {
    BuscarInputConteiner,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

} from './style';


const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const naVigate = useNavigate();

    const handleClicKSignIn = () => {
        naVigate('/cadastro')
    }
    const naviGate = useNavigate();

    const handleCliCKSignIn = () => {
        naVigate('/')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img  href="/" src={logo} alt="Logo Portal" onClick={handleCliCKSignIn}/>
                {autenticado ? (
                    <>
                           <BuscarInputConteiner>
                    <Input placeholder='Procurar...'/>
                </BuscarInputConteiner>
                <Menu>Live Code</Menu>
                <Menu> Global</Menu>
                </>
                )  :null}
            </Row>
            <Row>
                {autenticado ? (

                    <UserPicture src="https://media-exp1.licdn.com/dms/image/C4D03AQGThKEaGPhJxQ/profile-displayphoto-shrink_200_200/0/1642428236472?e=1673481600&v=beta&t=-0Lx6IhyiJYgGdm5inDMONESJj413aT-gEkXOerRpNU"  title="Pablo Kenedy"/> 
                ) :(
                <>
                <MenuRight href="/">Home</MenuRight>
                <Button href="" title="Entrar"  variant="primary"   onClick={handleClickSignIn}/>
                <Button title="Cadastrar"  variant="primary"  onClick={handleClicKSignIn}/>
                </>
  )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
