import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header/Header';
import { UsersTable } from './components/Table/Table';
import { UserContextProvider } from './hooks/useUsers';
import { NewUserModal } from './components/NewUserModal/NewUserModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenNewuserModal() {
    setIsModalOpen(true);
  }

  function handleCloseNewuserModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <UserContextProvider>
        <GlobalStyle />
        <Header onClickModalButton={handleOpenNewuserModal} />
        <NewUserModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseNewuserModal}
        />
        <UsersTable />
      </UserContextProvider>
    </>
  );
};
