import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASKS_COLLECTION } from "@storage/storageConfig";
import { getTasks } from "./getTasks";

export async function updateTask(taskId: string) {
    try {
        const storage = await getTasks();
        const updatedTaskList = storage.map(task => {
            if (task.id === taskId) {
                return { ...task, isDone: !task.isDone };
            }
            return task;
        });
        await AsyncStorage.setItem(TASKS_COLLECTION, JSON.stringify(updatedTaskList));
    } catch (error) {
        throw error;
    }
}