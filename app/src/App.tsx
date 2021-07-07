import { UserContextProvider } from './hooks/usersContext';
import { UsersTable } from './components/Table/Table';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => (
  <>
    <UserContextProvider>
      <GlobalStyle />
      <Header />
      <UsersTable />
    </UserContextProvider>
  </>
);
