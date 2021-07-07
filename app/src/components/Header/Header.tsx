import addImg from '../../assets/add.svg';
import { Container, Content, Title } from './styles';

interface HeaderProps {
  onClickModalButton: () => void;
}

export const Header = ({ onClickModalButton }: HeaderProps) => (
  <>
    <Container>
      <Content>
        <Title>
          Tabela de
          <strong>Usuarios</strong>
        </Title>
        <button onClick={onClickModalButton} type="button">
          <img src={addImg} alt="Add New User" />
          <span>Adicionar Novo Usuario</span>
        </button>
      </Content>
    </Container>
  </>
);
