import AsyncStorage from '@react-native-async-storage/async-storage';
export const setStorage = async (
  key: string,
  value: unknown
) => {
  try {
    const valueStorage = JSON.stringify(value);
    await AsyncStorage.setItem(key, valueStorage);
  } catch (e) {
    console.log(e);
  }
};
