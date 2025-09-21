import AsyncStorage from '@react-native-async-storage/async-storage';
const TOKEN = 'authToken';

export const saveToken = (t: string) => AsyncStorage.setItem(TOKEN, t);
export const getToken = () => AsyncStorage.getItem(TOKEN);
export const clearAll = () => AsyncStorage.clear();
