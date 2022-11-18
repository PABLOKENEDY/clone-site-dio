import  Imgbanner  from '../img/banner1.png';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {useNavigate} from 'react-router-dom';

import {
    Container,
    TextContent,
    TitleHighLight,
    Title
} from './style';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Aprenda Tecnologias Emergentes <br />
                    </TitleHighLight>
                    Os nossos cursos e programas de formação são criados em conjunto com especialistas das empresas mais inovadoras do mundo, aplicando uma metodologia para que você domine as tecnologias utilizadas no mercado e também mergulhe nas novas e mais atuais tecnologias que impactarão o futuro dos negócios digitais.


                </Title>
                <TextContent>

                </TextContent>
                <Button title="Iniciar Agora"  variant="secundary"  onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={Imgbanner} alt="Imagem Princial Projeto"/>
            </div>
        </Container>

    </>)

}

export {Home}