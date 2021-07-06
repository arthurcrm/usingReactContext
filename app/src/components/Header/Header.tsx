import { Container, Title } from './styles';
import addImg from '../../assets/add.svg';

export const Header: React.FC = () => (
  <>
    <Container>
      <Title>
        Tabela de
        <strong>Usuarios</strong>
      </Title>
      <button type="button">
        <img src={addImg} alt="Add New User" />
        <span>Adicionar Novo Usuario</span>
      </button>
    </Container>
  </>
);
