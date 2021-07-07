import { useUsers } from '../../hooks/useUsers';
import { Container } from './styles';
import removeImg from '../../assets/remove.svg';

import editImg from '../../assets/edit.svg';

export const UsersTable: React.FC = () => {
  const { users, removeUser, updateUser } = useUsers();

  function handleRemoveUser(userID: number) {
    removeUser(userID);
  }

  function handleUpdateUser(userId: number) {
    updateUser({ name: 'teste', email: 'teste', userId });
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(user.createdAt),
                  )}
                </td>
                <td>
                  <button type="button">
                    <img
                      onClick={() => handleUpdateUser(user.id)}
                      src={editImg}
                      alt="Edit user"
                    />
                    <img
                      onClick={() => handleRemoveUser(user.id)}
                      src={removeImg}
                      alt="Remove user"
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <span>Teste</span>
          )}
        </tbody>
      </table>
    </Container>
  );
};
