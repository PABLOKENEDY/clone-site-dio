import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input/index-new";
import { Line } from "../../components/Input/style-css";
import { MdMailOutline , MdLock, MdAccountBox, MdPermPhoneMsg} from "react-icons/md";


import {
    Column, 
    Container, 
    Row, 
    Title, 
    Wrapper,
    TitleLogin,
    EsqueciText,
    CriarText,
    SubTitleLogin,
} from './style';

const Cadastro = () => {
    return (<>
        <Header />
        <Container>
            <Column>
            
                <Title>
                    
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <div>
                        <Line></Line>
                    </div>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e fazer a mudança._</SubTitleLogin>
                    <form>
                    <Input placeholder="Insira Nome Completo" leftIcon={<MdAccountBox/>}/>
                    <Input placeholder="Insira Em-mail" leftIcon={<MdMailOutline/>}/>
                    <Input  type="number"   placeholder="Celular ex: (31)9 9999-9999" leftIcon={<MdPermPhoneMsg/>}/>
                    <Input placeholder="Senha do Usuário" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant="secondary" />
                    </form>
                    <Row>
                        <EsqueciText href="#"> Esqueci Minha Senha</EsqueciText>
                        <CriarText href="#"> Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
            <div>
                
            </div>
        </Container>

    </>)

}

export {Cadastro}