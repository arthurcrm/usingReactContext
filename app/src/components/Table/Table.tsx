import { Container } from './styles';
import removeImg from '../../assets/remove.svg';
import editImg from '../../assets/edit.svg';

export const UsersTable: React.FC = () => (
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
        <tr key={1}>
          <td>Teste</td>
          <td className="teste">tete</td>
          <td>Categoria</td>
          <td>
            {/* {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )} */}
            data
          </td>
          <td>
            <button type="button">
              <img src={editImg} alt="Edit user" />
              <img src={removeImg} alt="Remove user" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </Container>
);
