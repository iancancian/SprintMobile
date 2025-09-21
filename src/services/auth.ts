import { saveToken, clearAll } from './storage';

const USERS = [
  { username: 'maria', password: '1234' },
];


export async function login(username: string, password: string): Promise<boolean> {
  const valid = USERS.find(u => u.username === username && u.password === password);
  if (valid) {
    await saveToken('demo-token'); 
    return true;
  }
  return false;
}

export async function logout() {
  await clearAll();
}
