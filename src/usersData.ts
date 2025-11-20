export type User = {
  username: string;
  password: string;
  role: 'admin' | 'user' | 'guest';
};

const usersData: User[] = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
  { username: 'guest', password: 'guest123', role: 'guest' },
];

export default usersData;
