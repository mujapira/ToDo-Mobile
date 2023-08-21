import AsyncStorage from '@react-native-async-storage/async-storage';
import { TASKS_COLLECTION } from "@storage/storageConfig";
import { getTasks } from './getTasks';

export async function deleteGroup(taskToDelete: string) {
  try {
    const storage = await getTasks();
    const taskListWithoutDeletedOne = storage.filter(task => task !== taskToDelete)

    await AsyncStorage.setItem(`${TASKS_COLLECTION}`, JSON.stringify(taskListWithoutDeletedOne));
  } catch (error) {
    throw error;
  }
}
