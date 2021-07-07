import { useEffect } from 'react';

import { useUsers } from '../../hooks/usersContext';
import { Container } from './styles';
import removeImg from '../../assets/remove.svg';

import editImg from '../../assets/edit.svg';

export const UsersTable: React.FC = () => {
  const { users } = useUsers();

  console.log('users table', users);

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
          {users.map(user => (
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
                  <img src={editImg} alt="Edit user" />
                  <img src={removeImg} alt="Remove user" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
