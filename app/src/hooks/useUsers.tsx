import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../components/services/api';

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

type NewUser = Omit<User, 'id' | 'createdAt'>;

interface UserContextData {
  users: User[];
  addUsers: (transaction: NewUser) => void;
  removeUser: (productId: number) => void;
  updateUser: ({ email, name, userId }: UserUpdatedProps) => void;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UserUpdatedProps extends NewUser {
  userId: number;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUser() {
      await api.get('/users').then(response => {
        setUsers(response.data);
      });
    }
    getUser();
  }, []);

  async function addUsers(newUser: NewUser) {
    if ((newUser.name && newUser.email).length > 0) {
      const response = await api.post('/users', {
        ...newUser,
        createdAt: new Date(),
      });
      setUsers(response.data);
    } else {
      throw toast.error('Nao eh possivel cadastrar um usuario vazio');
    }
  }

  const removeUser = (userId: number) => {
    try {
      const newUser = [...users];

      const userIndex = newUser.findIndex(user => user.id === userId);

      if (userIndex > 0) {
        newUser.splice(userIndex, 1);
        setUsers(newUser);
      } else {
        throw Error();
      }
    } catch {
      toast.error('Nao foi possivel remover o usuario');
    }
  };

  const updateUser = ({ email, name, userId }: UserUpdatedProps) => {
    try {
      const newUser = [...users];

      const userExists = newUser.find(user => user.id === userId);

      if (userExists) {
        userExists.name = name;
        userExists.email = email;
        setUsers(newUser);
      }
    } catch {
      toast.error('Erro ao alterar o usuario');
    }
  };

  return (
    <UserContext.Provider value={{ users, addUsers, removeUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  return context;
}
