import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../components/services/api';

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

interface UserContextData {
  users: User[];
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  return context;
}
