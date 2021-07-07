import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { useUsers } from '../../hooks/useUsers';
import { Container } from './styles';

interface NewUserModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
}

export const NewUserModal = ({ isOpen, onRequestClose }: NewUserModalProps) => {
  const { addUsers } = useUsers();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleCreateNewUser(event: FormEvent) {
    event.preventDefault();
    await addUsers({ name, email });

    setName('');
    setEmail('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={event => handleCreateNewUser(event)}>
        <h2>Cadastrar Usuario</h2>
        <input
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Nome"
        />
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Email"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
